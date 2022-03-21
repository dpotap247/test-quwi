<template>
  <div class="page">
    <div class="projects">
      <Project
        :data="item"
        v-for="item in projects"
        :key="item.id"
        @updateTime="updateTime(item, $event)"
        @click.native="selectProject(item)"
      />
    </div>
    <Modal
      :data="selectedProject"
      v-model="isShowEditModal"
      v-if="selectedProject"
      @updated="updateItem"
    />
  </div>
</template>

<script>
import Project from '@/components/projects/Project.vue'
import Modal from '@/components/dashboard/EditModal.vue'
import formatter from '@/mixins/formatter.js'

export default {
  components: {
    Project,
    Modal,
  },
  mixins: [formatter],
  data() {
    return {
      filters: {
        is_active: 1,
      },
      sort: 'dta_create',
      projects: null,
      isShowEditModal: false,
      selectedProject: null,
    }
  },
  created() {
    this.loadProjects()
  },
  methods: {
    async loadProjects() {
      const params = {
        sort: this.sort,
      }

      for (const key in this.filters) {
        const value = this.filters[key]
        params[`filters[${key}]`] = value
      }
      try {
        const {
          data: { projects },
        } = await this.$axios.get('projects-manage/index', params)

        this.projects = projects
      } catch (err) {
        console.log(err)
      }
    },
    selectProject(item) {
      this.selectedProject = item
      this.isShowEditModal = true
    },
    updateTime(item, time) {
      item.all_time_spent_sec = time.all_time_spent_sec
      item.last_30_days_spent_sec = time.last_30_days_spent_sec
      item.this_month_spent_sec = time.this_month_spent_sec
    },
    updateItem(updatedItem) {
      for (const key in updatedItem) {
        const value = updatedItem[key]
        this.selectedProject[key] = value
      }
      this.isShowEditModal = false
      this.selectedProject = null
    },
  },
  // setup() {

  // },
}
</script>

<style scoped lang="scss">
// .page {
//   width: 100%;
//   align-items: ;
// }
.projects {
  height: 100%;
  width: 506px;
  margin: 0 auto;
}
</style> 

