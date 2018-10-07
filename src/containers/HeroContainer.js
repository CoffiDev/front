import { getRandomIlment } from '@/lib/requests'

export const HeroContainer = (component) => {
  return {
    data() {
      return {
        attendedChildren: 0,
        ailmentName: ''
      }
    },
    async beforeMount() {
      const RandomIlment = await getRandomIlment()

      this.attendedChildren = RandomIlment.attendedChildren
      this.ailmentName = RandomIlment.ailmentName
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
