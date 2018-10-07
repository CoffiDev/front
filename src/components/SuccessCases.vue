<template>
  <section class="text-center color-primary">
    <p>
      <p class='text-emphasis capitalize no-margin'>{{patientName}}</p>
      así como {{graduatedPatients}} niños con <span class='lowercase'>{{ailmentName}}</span>
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
