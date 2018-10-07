export const HeroContainer = (component) => {
  return {
    computed: {
      attendedChildren() {
        return this.$store.state.crit.patientsTotal
      },
      ailmentName() {
        return this.$store.state.ilment.ailmentName
      }
    },
    render(h) {
      const props = {
        attendedChildren: this.attendedChildren,
        ailmentName: this.ailmentName
      }

      return h(component, { props })
    }
  }
}
