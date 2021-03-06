import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getGeneral, getRandomIlment, getRandomCRIT, getCritInfo, getDonations } from '@/lib/requests'

export default new Vuex.Store({
  state: {
    ilment: {
      attendedChildren: 0,
      ailmentName: '',
      testimony: '',
      graduated: '',
      achievements: '',
      totalGraduated: 0
    },
    crit: {
      centerName: '',
      patientsCurrent: 0,
      currentPercentage: 0,
      patientsTotal: 0,
      givenAmount: 0,
      amountNeeded: 0,
      requiredDonation: 0
    },
    critsInfo: [],
    general: {
      percentage: 0,
      donations: 0,
      goal: 1000000,
      currentChildren: 100,
      goalChildren: 200
    },
    selectedCRIT: null,
    donations: []
  },
  getters: {
    selectedCRITInfo: (state) => {
      return state.critsInfo.find(x => x.name === state.selectedCRIT) ||
        state.critsInfo[0]
    }
  },
  mutations: {
    setAppState(state, { ilment, general, crit, critsInfo, donations }) {
      state.ilment = ilment
      state.general = general
      state.crit = crit
      state.critsInfo = critsInfo
      state.donations = donations
    },
    setGeneral(state, { general }) {
      state.general = general
    },
    selectCRIT(state, selectedCRIT) {
      state.selectedCRIT = selectedCRIT
    },
    setDonations(state, donations) {
      state.donations = donations
    }
  },
  actions: {
    async getDonations({ commit }) {
      const donations = await getDonations()
      commit('setDonations', donations)
    },

    async getAppState({ commit }) {

      const general = await getGeneral()
      const crit = await getRandomCRIT()
      const ilment = await getRandomIlment()

      const critsInfo = await getCritInfo()

      const donations = [] // await getDonations()

      commit('setAppState', { ilment, general, crit, critsInfo, donations })
    }
  }
})
