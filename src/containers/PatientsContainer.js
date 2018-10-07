export const PatientsContainer = (component) => {
  return {
    computed: {
      centerName() { return this.$store.state.crit.centerName },
      patientsCurrent() { return this.$store.state.crit.patientsCurrent }
    },
    render(h) {
      const props = {
        centerName: this.centerName,
        patientsCurrent: this.patientsCurrent,
      }
      return h(component, { props })
    }
  }
}
