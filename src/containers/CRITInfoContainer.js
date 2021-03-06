export const CritInfoContainer = (component) => {
  return {
    computed: {
      selectedCRIT() {
        return this.$store.state.critsInfo.find(
          x => x.name === this.$store.state.selectedCRIT
        ) || this.$store.state.critsInfo[0]
      },
      options() {
        return this.$store.state.critsInfo
      }
    },
    methods: {
      handleSelectCRIT(selected) {
        console.log(selected.target.value)
        this.$store.commit('selectCRIT', selected.target.value)
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
