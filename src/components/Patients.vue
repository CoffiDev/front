<template>
  <section class="patients">
    <header class="patients__header text-center">
      El <strong>{{centerName}}</strong>
      <br/>
      aun necesita atender a 
      <br/>
      <strong class='text-emphasis'>
        {{Math.ceil(patientsCurrent)}} pacientes más
      </strong>

      <div class="monitos">
        <div  v-for="token in currentTokens">
          xaxa
        </div>

        <div v-for="token in maxTokens - currentTokens">
          xoxo
        </div>
      </div>
    </header>
    <div class='patients__grid'>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Patients',
  props: {
    centerName: {
      type: String,
      default: 'Centro Autismo Teletón'
    },
    patientsCurrent: {
      type: Number
    },


    currentTokens: {
      type: Number
    },
    maxTokens: {
      type: Number
    }
  }
}
</script>
