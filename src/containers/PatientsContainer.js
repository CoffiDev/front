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

      /*
      patientsMax() {
        return (this.patientsCurrent() * 100) / this.patientsPercentage()
      },
      */
      currentTokens() {
        return  Math.floor(this.currentPercentage * this.maxTokens / 100)
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
