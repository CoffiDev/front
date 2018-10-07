import axios from 'axios'

const HttpService = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const getRandomCRIT = async () => {
  const crit = await HttpService.get('random/crit')

  console.log(crit)

  return {
    centerName: crit.nombre,
    patientsTotal: crit.pacientes,
    goalPercentage: crit.montoDestinado,
    amountNeeded: crit.beneficiados,
  }
}
