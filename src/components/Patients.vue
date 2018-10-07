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

      <div class="patients-grid">
        <span v-for="(token, index) in maxTokens - currentTokens" class="patient patient--complete" :style="{'--patient-index': index}">
          <svg v-if="index % 2 == 0">
            <use xlink:href='#icon-girl-complete' />
          </svg>
          <svg v-else>
            <use xlink:href='#icon-boy-complete' />
          </svg>
        </span>

        <span v-for="(token, index) in currentTokens" class='patient patient--pending'>
          <svg v-if="index % 2 == 0" viewbox='0 0 38 58'>
            <use xlink:href='#icon-girl' />
          </svg>
          <svg v-else >
            <use xlink:href='#icon-boy' />
          </svg>
        </span>

        
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
