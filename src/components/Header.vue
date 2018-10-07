<template>
  <header class='site-header'>
    <h1 class="logo">
      <img src='@/assets/logo-teleton.svg' alt='Teletón 2018'>
    </h1>
    <div class='goal-bar'>
      <div class='goal-bar__progress'>
        <p class='goal-bar__progress-item'>
          <small>Se han donado</small>
          {{progressDonation}}
        </p>
        <p class='goal-bar__progress-item'>
          <small>Con este monto ayudamos a</small>
          {{progressChildren}} niños y niñas
        </p>
      </div>
      <div class='goal-bar__goal'>
        <p class='goal-bar__goal-item'>
          <span>Meta:</span>
          {{goalDonation}}+1
        </p>
        <p class='goal-bar__goal-item'>
          <span>Meta:</span>
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
    progressDonation: String,
    progressChildren: String, 
    goalDonation: String,
    goalChildren: String,
  }
}
</script>