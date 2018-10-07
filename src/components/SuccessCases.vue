<template>
  <section class="text-center">
    <p>
      <strong class='text-emphasis'>{{patientName}}</strong>
      <br/>
      así como {{patients}} niños con {{ailmentName}}
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
        Andrés Aprendió a comportarse mejor,  ya espera turnos, empieza a solicitar las cosas, a vestirse solo,  así como a ir al baño solo. 
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
    patients: {
      type: Number, 
      default: 55
    }, 
    ailmentName: {
      type: String,
      default: 'autismo'
    }

  }
}
</script>