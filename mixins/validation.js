import { validationText, ruleRegExpes } from '@/store/constant'

export default {
  data() {
    return {
      parsedRules: [],
      errors: [],
      untouched: true,
    }
  },
  created() {
    this.parseRules()
  },
  methods: {
    parseRules() {
      this.parsedRules = this.rules.split('|')
    },
    showValidation() {
      this.untouched = false
      if (this.parsedRules.length) {
        this.parsedRules.forEach((rule) => {
          this.checkValidInput(rule)
        })
      }
    },
    hiddenValidation() {
      this.untouched = true
      this.errors = []
    },
    checkValidInput(rule) {
      let key = rule
      let count = ''
      let error = false

      if (rule.includes(':')) {
        //cause min:6
        const splitedRuleText = rule.split(':')
        key = splitedRuleText[0]
        count = splitedRuleText[1]
      }

      switch (key) {
        case 'required': {
          if (!this.value.length) {
            error = true
          }
          break
        }
        case 'email': {
          if (!this.value.match(ruleRegExpes.email)) {
            error = true
          }
          break
        }
        case 'min': {
          if (count && this.value.length < parseInt(count)) {
            error = true
          }
          break
        }
      }

      if (error) {
        this.getErrorText(key, count)
      }
    },
    getErrorText(key, count) {
      let errorText = validationText[key]

      if (errorText) {
        if (count) {
          errorText = `${count} ${errorText}`
        }
        this.errors.push(errorText)
      }
    },
  },

  // console.log(this.)
}
