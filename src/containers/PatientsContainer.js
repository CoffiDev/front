export const PatientsContainer = (component) => {
  return {
    data() {
      return {
        maxTokens: 72
      }
    },
    computed: {
      centerName() { return this.$store.state.crit.centerName },
      patientsCurrent() { return this.$store.state.crit.patientsCurrent },

      currentPercentage() { return this.$store.state.crit.currentPercentage },

      currentTokens() {
        return  Math.floor((this.currentPercentage / 100) * this.maxTokens)
      }
    },
    render(h) {
      const props = {
        centerName: this.centerName,
        patientsCurrent: this.patientsCurrent,

        currentTokens: this.currentTokens,
        maxTokens: this.maxTokens
      }
      return h(component, { props })
    }
  }
}
