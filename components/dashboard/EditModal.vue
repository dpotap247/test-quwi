<template>
  <Modal :show="value" @input="$emit('input', $event)">
    <div v-if="data">
      <img class="edit__logo" :src="data.logo_url" />
      <ValidationObserver ref="formValidationObserver">
        <BaseInput class="edit__input" rules="required" placeholder="Type name project" label="Name" v-model="name" />
      </ValidationObserver>
      <BaseInput class="edit__input" readonly label="All time" rules="required" v-model="data.all_time_spent_sec" />
      <BaseInput
        class="edit__input"
        readonly
        label="Last 30 days"
        rules="required"
        v-model="data.last_30_days_spent_sec"
      />
      <BaseInput class="edit__input" readonly label="This month" rules="required" v-model="data.this_month_spent_sec" />
      <BaseButton class="edit__btn" :isLoading="isLoading" readonly type="primary" @click.native="save">
        Save
      </BaseButton>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/elements/Modal'
import BaseInput from '@/components/elements/BaseInput'
import BaseButton from '@/components/elements/BaseButton'
import ValidationObserver from '@/components/elements/ValidationObserver.vue'

export default {
  components: {
    Modal,
    BaseInput,
    BaseButton,
    ValidationObserver,
  },
  props: {
    value: Boolean,
    data: {
      type: Object,
    },
  },
  data() {
    return {
      name: '',
      isLoading: false,
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async save() {
      if (this.$refs.formValidationObserver.isValid()) {
        this.isLoading = true

        const payload = {
          name: this.name,
        }
        try {
          const {
            data: { project },
          } = await this.$axios.post(`/projects-manage/update?id=${this.data.id}`, payload)
          if (project) {
            this.$emit('updated', { name: project.name })
          }
        } catch (err) {
          console.log(err)
        }
        this.isLoading = false
      }
    },
    loadData() {
      this.name = this.data.name
    },
  },
}
</script>

<style scoped lang="scss">
.edit {
  &__logo {
    border-radius: 50%;
    width: 100px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  &__input {
    margin-top: 15px;
  }
  &__btn {
    display: block;
    margin-top: 20px;
    margin-left: auto;
  }
}
</style>
