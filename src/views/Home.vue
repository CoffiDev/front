<template>
  <div class="home">
    <Header 
      progressDonation='$144,555,566'
      progressChildren='100000'
      goalDonation='$364,097,181'
      goalChildren='100000' />
    <Hero/>
    <Patients/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue' 
import Hero from '@/components/Hero.vue' 
import Patients from '@/components/Patients.vue' 

import { PatientsContainer } from '@/containers/PatientsContainer'
import { HeroContainer } from '@/containers/HeroContainer'

export default {
  name: 'home',
  components: {
    Header,
    HelloWorld, 
    Hero: HeroContainer(Hero),
    Patients: PatientsContainer(Patients),
  }
}
</script>
