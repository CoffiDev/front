<template>
  <div class="home">
    <Header 
      :progressDonation=144555566
      :progressChildren=100000
      :goalDonation=364097181
      :goalChildren=100000 />
    <Hero/>
    <Patients/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue' 
import Hero from '@/components/Hero.vue' 
import Patients from '@/components/Patients.vue' 

export default {
  name: 'home',
  components: {
    Header,
    HelloWorld, 
    Hero,
    Patients,
  }
}
</script>
