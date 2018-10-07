export const CritInfoContainer = (component) => {
  return {
    computed: {
      benefitChildren() {
        return this.$store.state.critInfo.benefitChildren
      },
      donationsRepresentationPercentage() {
        return this.$store.state.critInfo.donationsRepresentationPercentage
      },
      costPerpatient() {
        return this.$store.state.critInfo.costPerpatient
      },
      maxAmountRequired() {
        return this.$store.state.critInfo.maxAmountRequired
      },
      maxAmountPatients() {
        return this.$store.state.critInfo.maxAmountPatients
      },
      critName() {
        return this.$store.state.critInfo.name
      }
    },
    render(h) {
      const props = {
        critName: this.critName,
        benefitChildren: this.benefitChildren,
        donationsRepresentationPercentage: this.donationsRepresentationPercentage,
        costPerpatient: this.costPerpatient,
        maxAmountRequired: this.maxAmountRequired,
        maxAmountPatients: this.maxAmountRequired,
      }
      return h(component, { props })
    }
  }
}
