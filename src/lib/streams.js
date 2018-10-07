import { interval } from 'rxjs'

import { switchMap, distinctUntilChanged } from 'rxjs/operators'

import { getGeneral } from '@/lib/requests'

import store from '@/store'

const generalStream = interval(100000).pipe(
  switchMap(() => getGeneral()),
  distinctUntilChanged((x, y) => {
    return x.percentage === y.percentage
  })
)

generalStream.subscribe((general) => {
  store.commit('setGeneral', { general })
})
