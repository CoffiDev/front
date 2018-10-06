<template>
  <div class="home">
    <Header 
      progressDonation='$144,555,566'
      progressChildren='100000'
      goalDonation='$144,555,566'
      goalChildren='100000' />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue' 

export default {
  name: 'home',
  components: {
    Header,
    HelloWorld, 
  }
}
</script>
