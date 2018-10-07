<template>
  <section class='hero' :class="'hero--' + ailmentName" :style="{'background-image': 'url(' + require('../assets/header-' + (Math.round(Math.random() * 4) + 1) + '.jpg') + ')'
}">
    <div class='container'>
      <a
        href='https://twitter.com/home?status=%23yoYaDon%C3%A9%20a%20%23Telet%C3%B3n%20para%20darles%20una%20mejor%20vida%20a%20nuestros%20ni%C3%B1os.%20Ve%20sus%20historias%20en%20http%3A//tuteleton.surge.sh'
        target="_blank"
        class='no-underline bold color-emphasis social-link'>
        #yoYaDoné
      </a>
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
            :from="attendedChildren * .3"
            :to="attendedChildren"
            duration="1500"
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
      <a class='btn btn--action btn--hero' style="text-decoration: none" href="https://www.teleton.org/donar" target="_blank">
        Quiero donar
      </a>
      <img class='yellow-topping' src='@/assets/yellow-topping.svg' aria-hidden='true'/>
    </div>
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
