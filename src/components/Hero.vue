<template>
  <section class='hero' :class="'hero--' + ailmentName">
      <div class='hero__info'>
        <span class='hero__line-1'>
          Con tu donativo
        </span>
        <span class='hero__line-2'>
          atendermos a
        </span>
        <span class='hero__line-3'>{{attendedChildren}} niñas</span>
        <span class='hero__line-4'> y niños</span>
        <span class='hero__line-5'>
          con {{ailmentName}}
        </span>
        <span class='hero__line-6'>
          entre casi 16000<br/>
          con otros padecimientos
        </span>
      </div>
      <button class='btn btn--action'>
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
  }
}
</script>