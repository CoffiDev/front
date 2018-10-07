import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getGeneral, getRandomIlment, getRandomCRIT } from '@/lib/requests'

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
    },
    general: {
      percentage: 0,
      donations: 0,
      goal: 1000000,
      currentChildren: 100,
      goalChildren: 200
    }
  },
  mutations: {
    setAppState(state, { ilment, general, crit }) {
      state.ilment = ilment
      state.general = general
      state.crit = crit
    }
  },
  actions: {
    async getAppState({ commit }) {
      console.log('kheee')

      const general = await getGeneral()
      const crit = await getRandomCRIT()
      const ilment = await getRandomIlment()

      commit('setAppState', { ilment, general, crit })
    }
  }
})
