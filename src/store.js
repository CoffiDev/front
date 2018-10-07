import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getGeneral, getRandomIlment, getRandomCRIT } from '@/lib/requests'

export default new Vuex.Store({
  state: {
    ilment: {
      attendedChildren: 0,
      ailmentName: 0,
      testimony: '',
      graduated: '',
      achievements: ''
    },
    crit: {
      centerName: '',
      patientsCurrent: 0,

      patientsTotal: 0,
      goalPercentage: 0,
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

      const ilment = await getRandomIlment()
      const general = await getGeneral()
      const crit = await getRandomCRIT()

      commit('setAppState', { ilment, general, crit })
    }
  }
})
