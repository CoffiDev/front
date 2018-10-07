<template>
  <div
    class="home"
    style="height: 100%"
  >
    <transition
      name="slide-fade"
    >
      <div
        class="loader"
        v-if="$store.state.ilment.attendedChildren  === 0"
      ></div>
    </transition>
    <div  v-if="$store.state.ilment.attendedChildren > 0">
      <Header/>
      <Hero/>
      <Patients/>
      <SuccessCases/>
      <CritInfo/>
      <Donations/>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue' 
import Hero from '@/components/Hero.vue' 
import Patients from '@/components/Patients.vue' 
import SuccessCases from '@/components/SuccessCases.vue'
import CRITInfo from '@/components/CRITInfo.vue'

import Donations from '@/components/Donations.vue'

import { PatientsContainer } from '@/containers/PatientsContainer'
import { HeroContainer } from '@/containers/HeroContainer'
import { HeaderContainer } from '@/containers/HeaderContainer'

import { SuccessCaseContainer } from '@/containers/SuccessCaseContainer'
import { CritInfoContainer } from '@/containers/CRITInfoContainer'

import '@/lib/streams'

export default {
  name: 'home',
  beforeMount() {
    this.$store.dispatch('getAppState')
  },
  components: {
    HelloWorld,
    Donations,
    CritInfo: CritInfoContainer(CRITInfo),
    Header: HeaderContainer(Header),
    Hero: HeroContainer(Hero),
    Patients: PatientsContainer(Patients),
    SuccessCases: SuccessCaseContainer(SuccessCases),
  }
}
</script>

<style lang="sass" scoped>
  .loader
    width: 100vw
    height: 100vh
    background: var(--color-primary)
    position: absolute
    left: 0
    top: 0
    z-index: 4

  .slide-fade-leave-active
    transition: all 0.4s ease-out

  .slide-fade-leave-to
    opacity: 0

</style>