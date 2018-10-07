<template>
  <div class="crit-info">
    <h2 class='text-emphasis text-center color-primary'>
      {{critName}}
    </h2>

    <information-nugget
      :lines="[
        { text: Math.floor(benefitChildren), type: 'color-accent-2 text-emphasis' },
        { text: 'niños beneficiados', type: 'emphasis' },
        { text: 'con tu donativo' }
      ]"
    />

    <information-nugget
      :lines="[
        { text: 'Los donativos', type: 'emphasis' },
        { text: 'representan', type: 'emphasis' },
        { text: donationsRepresentationPercentage + '%', type: 'color-accent-2 text-emphasis' },
        { text: 'de los recursos'},
        { text: 'que necesita este centro'}
      ]"
    />

    <information-nugget
      :lines="[
        { text: 'Su costo por paciente', type: 'emphasis' },
        { text: 'asciende a', type: 'emphasis' },
        { text: '$' + Math.floor(costPerpatient).toLocaleString(), type: 'color-accent-2 text-emphasis' }
      ]"
    />

    <information-nugget
      :lines="[
        { text: 'El centro necesita', type: 'emphasis' },
        { text: '$' + Math.ceil(maxAmountRequired / 1000000) + ' MDP', type: 'color-accent-2 text-emphasis'},
        { text: 'para atender hasta' },
        { text: Math.floor(benefitChildren), type: 'color-accent-2 text-emphasis' },
        { text: 'niños y niñas' },
      ]"
    />
  </div>
</template>

<script>
import InformationNugget from './InformationNugget'

export default {
  name: "CritInfo",
  components: {
    InformationNugget
  },
  props: {
    critName: {
      type: String
    },
    benefitChildren: {
      type: Number,
      default: 1147
    },
    donationsRepresentationPercentage: {
      type: Number,
      default: 50
    },
    costPerpatient: {
      type: Number,
      default: 35521
    },
    maxAmountRequired: {
      type: Number,
      default: 82
    },
    maxAmountPatients: {
      type: Number,
      default: 2000
    }
  }
}
</script>
