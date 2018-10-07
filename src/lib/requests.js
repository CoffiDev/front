import axios from 'axios'

import { API_BASE_URL } from '@/lib/constants'

const HttpService = axios.create({
  baseURL: API_BASE_URL
})

export const getCritInfo = async (name) => {
  const response = await HttpService.get('datos/crit')

  const CRITResponse = response.data.crits.find(x =>
    console.log(x) || x.nombre === name
  )

  console.log(CRITResponse)

  return {
    name: CRITResponse.nombre,
    benefitChildren:CRITResponse.beneficiados,
    donationsRepresentationPercentage:CRITResponse.porcentaje,
    costPerpatient:CRITResponse.costoPaciente,
    maxAmountRequired:CRITResponse.costoMaxOperaciones,
    maxAmountPatients:CRITResponse.a || 2000,
  }
}

export const getRandomCRIT = async () => {
  const response = await HttpService.get('random/crit')

  const CRITResponse = response.data

  return {
    centerName: CRITResponse.nombre,
    patientsCurrent: CRITResponse.beneficiados,

    patientsTotal: CRITResponse.pacientes,

    currentPercentage: CRITResponse.porcentajeBeneficiados,
    givenAmount: CRITResponse.montoDestinado,
    amountNeeded: CRITResponse.beneficiados,


    requiredDonation: CRITResponse.recursosNecesariosDonacionFaltantes
  }
}

export const getRandomIlment = async () => {
  const response = await HttpService.get('random/enfermedad')

  const IlmentResponse = response.data

  return {
    attendedChildren: parseInt(IlmentResponse.total),
    ailmentName: IlmentResponse.enfermedad.split(',')[0],
    totalGraduated: parseInt(IlmentResponse.totalEgresados),
    testimony: IlmentResponse.testimonio,
    graduated: IlmentResponse.nombreEgresado,
    achievements: IlmentResponse.logros
  }
}

export const getGeneral = async () => {
  const response = await HttpService.get('random/general')

  const GeneralResponse = response.data

  return {
    goal: GeneralResponse.meta,
    percentage: GeneralResponse.porcentaje,
    donations: GeneralResponse.donativos,
    currentChildren: GeneralResponse.pacientesActuales,
    goalChildren: GeneralResponse.pacientesMaximo
  }
}
