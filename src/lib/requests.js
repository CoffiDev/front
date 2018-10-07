import axios from 'axios'

const HttpService = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const getRandomCRIT = async () => {
  const response = await HttpService.get('random/crit')

  const CRITResponse = response.data

  return {
    centerName: CRITResponse.nombre,
    patientsTotal: CRITResponse.pacientes,
    goalPercentage: CRITResponse.montoDestinado,
    amountNeeded: CRITResponse.beneficiados,
  }
}

export const getRandomIlment = async () => {
  const response = await HttpService.get('random/enfermedad')

  const IlmentResponse = response.data

  return {
    attendedChildren: IlmentResponse.total,
    ailmentName: IlmentResponse.enfermedad.split(',')[0],

    testimony: IlmentResponse.testimonio,
    graduated: IlmentResponse.nombreEgresado,
    achievements: IlmentResponse.logros
  }
}

export const getGeneral = async () => {
  const response = await HttpService.get('random/general')

  const GeneralResponse = response.data

  return {
    percentage: GeneralResponse.porcentaje
  }
}
