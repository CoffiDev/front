<template>
  <section class='hero' :class="'hero--' + ailmentName" :style="{'background-image': 'url(' + require('../assets/header-' + (Math.round(Math.random() * 4) + 1) + '.jpg') + ')'
}">
      <div class='hero__info'>
        <span class='hero__line hero__line-1'>
          Con tu donativo
        </span>
        <span class='hero__line hero__line-2'>
          atenderemos a
        </span>

        <div style="display: flex; justify-content: flex-end">
          <animate-number
            class="hero__line hero__line-3"
            v-if="attendedChildren > 0"
            :from="0"
            :to="attendedChildren"
            duration="2500"
            easing="easeOutQuad"
            :formatter="num => num.toFixed(0)"
          />
          <span style="padding-left: 10px" class='hero__line hero__line-3'>niñas</span>
        </div>


        <span class='hero__line hero__line-4'> 
          y niños
        </span>
        <span class='hero__line hero__line-5'>
          con <span class='lowercase'>{{ailmentName}}</span>
        </span>
        <span class='hero__line hero__line-6'>
          entre casi 16000<br/>
          con otros padecimientos
        </span>
      </div>
      <button class='btn btn--action btn--hero'>
        Quiero donar
      </button>
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
