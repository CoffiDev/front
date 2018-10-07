import { getRandomCRIT } from '../lib/requests'

export const PatientsContainer = (component) => {
  return {
    data() {
      return {
        centerName: 'Wiw',
        patientsTotal: 0,
        goalPercentage: 0,
        amountNeeded: 0,
      }
    },
    async beforeMount() {
      const RandomCRIT = await getRandomCRIT()

      this.centerName = RandomCRIT.centerName
      this.patientsTotal = RandomCRIT.patientsTotal
      this.goalPercentage = RandomCRIT.goalPercentage
      this.amountNeeded = RandomCRIT.amountNeeded
    },
    render(h) {
      const props = {
        centerName: this.centerName,
        patientsTotal: this.patientsTotal,
        goalPercentage: this.goalPercentage,
        amountNeeded: this.amountNeeded
      }
      return h(component, { props })
    }
  }
}
