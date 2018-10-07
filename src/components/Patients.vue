<template>
  <section class="patients">
    <header class="patients__header text-center">
      El <strong>{{centerName}}</strong>
      <br/>
      aun necesita atender a 
      <br/>
      <strong class='text-emphasis'>
        {{patientsCurrent}} pacientes más
      </strong>
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
  },
  data () {
    return {
      amountCurrent: this.amountNeeded * (this.goalPercentage / 100),
      patientsCurrent: Math.round(this.patientsTotal * (this.goalPercentage / 100))
    }
  }
}
</script>
