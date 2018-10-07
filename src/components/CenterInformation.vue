<template>
  <section class='hero'>
  </section>
</template>

<script>


export default {
  name: 'Hero',
  props: {
    attendedChildren: {
      type: Number,
      default: 888
    },
    ailmentName: {
      type: String,
      default: 'autismo'
    }
  },
  data (){
    return{
    }
  }
}
</script>
