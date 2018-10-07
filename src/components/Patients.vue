<template>
  <section class="patients">
    <header class="patients__header">
      El <strong>{{centerName}}</strong>
      <br/>
      aun necesita atender a {{Math.ceil(patientsCurrent)}} pacientes más</header>
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
    /*
    patientsTotal: {
      type: Number,
      default: 120
    },
    goalPercentage: {
      type: Number,
      default: 30.5
    },
    amountNeeded: {
      type: Number,
      default: 1000000
    },
    */
    patientsCurrent: {
      type: Number
    }
  }
}
</script>
