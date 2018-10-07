export const HeaderContainer = (component) => {
  return {
    data() {
      return {
        progressDonation: 0,
        progressChildren: 0,
        goalDonation: 0,
        goalChildren: 0
      }
    },
    async beforeMount() {

    },
    render(h) {
      const props = {
        progressDonation: this.progressDonation,
        progressChildren: this.progressChildren,
        goalDonation: this.goalDonation,
        goalChildren: this.goalChildren
      }

      return h(component, { props })
    }
  }
}
