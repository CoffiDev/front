<template>
  <div class="home">
    <Header 
      :progressDonation=144555566
      :progressChildren=100000
      :goalDonation=364097181
      :goalChildren=100000 />
    <Hero/>
    <Patients/>
    <SuccessCases/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue' 
import Hero from '@/components/Hero.vue' 
import Patients from '@/components/Patients.vue' 
import SuccessCases from '@/components/SuccessCases.vue' 
import { PatientsContainer } from '@/containers/PatientsContainer'
import { HeroContainer } from '@/containers/HeroContainer'
import { HeaderContainer } from '@/containers/HeaderContainer'

export default {
  name: 'home',
  beforeMount() {
    this.$store.dispatch('getAppState')
  },
  components: {
    HelloWorld,
    Header: HeaderContainer(Header),
    Hero: HeroContainer(Hero),
    Patients: PatientsContainer(Patients),
    SuccessCases,
  }
}
</script>
