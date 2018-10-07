<template>
  <header class='site-header'>
    <h1 class="logo">
      <img src='@/assets/logo-teleton.svg' alt='Teletón 2018'>
    </h1>
    <div class='goal-bar'>
      <div class='goal-bar__progress' :style="{'--progressPercent': progressPercent + '%'}">
        <p class='goal-bar__progress-item'>
          <small>Se han donado</small>
          <br/>
          ${{Math.floor(progressDonation).toLocaleString()}}
        </p>
        <p class='goal-bar__progress-item'>
          <small>Con este monto ayudamos a</small>
          <br/>
          {{progressChildren}} niños y niñas
        </p>
      </div>
      <div class='goal-bar__goal'>
        <p class='goal-bar__goal-item'>
          <small>Meta:</small>
          <br/>
          <span class='color-accent'>
            ${{Math.floor(goalDonation).toLocaleString()}}<small> + 1</small>
          </span>
        </p>
        <p class='goal-bar__goal-item'>
          <span>Meta:</span>
          <br/>
          ayudar a {{goalChildren}} niños y niñas
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    progressDonation: {
      type: Number,
      default: 33
    },
    progressChildren: {
      type: Number, 
      default: 333
    },
    goalDonation: {
      type: Number,
      default: 3333
    },
    goalChildren: {
      type: Number,
      default: 3333
    },
    progressPercent: {
      type: Number,
      default: 0
    }
  }
}
</script>
