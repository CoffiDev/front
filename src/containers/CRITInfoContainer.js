export const CritInfoContainer = (component) => {
  return {
    computed: {
      selectedCRIT() {
        return this.$store.state.critsInfo.find(
          x => x.name === this.$store.state.selectedCRIT
        ) || {}
      },
      options() {
        return this.$store.state.critsInfo
      }
    },
    methods: {
      handleSelectCRIT(selected) {
        this.$store.commit('selectCRIT', selected)
      }
    },
    render(h) {
      const lal = this.selectedCRIT

      lal.handleSelectCRIT = this.handleSelectCRIT
      lal.options = this.options

      return h(component, { props: lal })
    }
  }
}
