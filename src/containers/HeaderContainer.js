export const HeaderContainer = (component) => {
  return {
    computed: {
      progressDonation() {
        return this.$store.state.general.donations
      },
      progressPercent() {
        return this.$store.state.general.percentage
      },

      goalDonation() {
        return this.$store.state.general.goal
      },
      progressChildren() {
        return this.$store.state.general.currentChildren
      },
      goalChildren() {
        return this.$store.state.general.goalChildren
      },
    },
    render(h) {
      const props = {
        progressDonation: this.progressDonation,
        progressPercent: this.progressPercent,
        goalDonation: this.goalDonation,
        progressChildren: this.progressChildren,
        goalChildren: this.goalChildren,
      }

      return h(component, { props })
    }
  }
}
