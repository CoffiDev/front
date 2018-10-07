import { interval } from 'rxjs'

import { switchMap, distinctUntilChanged } from 'rxjs/operators'

import { getGeneral } from '@/lib/requests'

import store from '@/store'

const generalStream = interval(1000).pipe(
  switchMap(() => getGeneral()),
  distinctUntilChanged((x, y) => {
    return x.percentage === y.percentage
  })
)

generalStream.subscribe((general) => {
  console.log('percentage', general.percentage)
  console.log('donations amount', general.donations)

  store.commit('setGeneral', { general })
})
