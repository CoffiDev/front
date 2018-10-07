export const SuccessCaseContainer = (component) => {
  return {
    computed: {
      patientName () {
        return this.$store.state.ilment.graduated
      },
      graduatedPatients() {
        return this.$store.state.ilment.totalGraduated
      },
      ailmentName() {
        return this.$store.state.ilment. ailmentName
      },
      testimony() {
        return this.$store.state.ilment.testimony.replace('Motivo: ', '').replace('Testimonio: ', '')
      }
    },
    render(h) {
      const props = {
        patientName: this.patientName,
        graduatedPatients: this.graduatedPatients,
        ailmentName: this.ailmentName,
        testimony: this.testimony
      }
      return h(component, { props })
    }
  }
}
