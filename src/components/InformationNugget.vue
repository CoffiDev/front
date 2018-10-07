<template>
  <div class="informationNugget" style="display: flex; flex-direction: column; align-items: center; padding-bottom: 30px">
    <span v-for="line in lines" :class="line.type || 'text'">
        {{line.text}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "InformationNugget",
    props: {
      lines: {
        type: Array,
        default: () => [],
        shape: { text: String, type: ['accent', 'emphasis', 'text'] }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .accent
    color: var(--color-accent)
    font-size: 24px
    font-weight: bold

  .text
    color: var(--color-primary)
    font-size: 18px

  .emphasis
    color: var(--color-primary)
    font-size: 18px
    font-weight: bold
</style>
