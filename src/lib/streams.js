import { interval } from 'rxjs'

import { switchMap, distinctUntilChanged } from 'rxjs/operators'

import { getGeneral } from '@/lib/requests'

import store from '@/store'

const generalStream = interval(2000).pipe(
  switchMap(() => getGeneral()),
  distinctUntilChanged((x, y) => {
    return x.percentage === y.percentage
  })
)

generalStream.subscribe((general) => {
  store.commit('setGeneral', { general })

  if (general.percentage !== 0) {
    store.dispatch('getDonations')
  }
})
