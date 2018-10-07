<template>
  <section class="text-center color-primary">
    <p>
      <strong class='text-emphasis'>{{patientName}}</strong>
      <br/>
      así como {{graduatedPatients}} niños con {{ailmentName}}
      <br/>
      <span class='text-emphasis text-emphasis--medium'>
        han <strong> mejorado su vida </strong> gracias a ti
      </span>
    </p>
    <div class="patient-photo">
      <img src="" :alt='patientName'/>
    </div>
    <p class='text-read text-read--small'>
      <small>
        {{testimony}}
      </small>
    </p>
  </section>
</template>

<script>
export default {
  name: 'SuccessCases',
  props: {
    patientName: {
      type: String,
      default: 'Andres'
    }, 
    graduatedPatients: {
      type: Number, 
      default: 55
    }, 
    ailmentName: {
      type: String,
      default: 'autismo'
    },
    testimony: {
      type: String,
    }
  }
}
</script>
