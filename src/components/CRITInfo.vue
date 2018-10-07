<template>
  <div class="crit-info">
    <div
      style="padding: 30px 0; display: flex; justify-content: center; font-size: 24px; color: #6a1f75; font-weight: bold"
    >
      {{critName}}
    </div>

    <information-nugget
      :lines="[
        { text: benefitChildren.toLocaleString(), type: 'accent' },
        { text: 'niños beneficiados', type: 'emphasis' },
        { text: 'con tu donativo' }
      ]"
    />

    <information-nugget
      :lines="[
        { text: 'Los donativos representan', type: 'emphasis' },
        { text: donationsRepresentationPercentage + '%', type: 'accent' },
        { text: 'de los recursos que necesita este centro', type: 'emphasis' }
      ]"
    />

    <information-nugget
      :lines="[
        { text: 'Su costo por paciente asciende a', type: 'emphasis' },
        { text: '$' + costPerpatient.toLocaleString(), type: 'accent' }
      ]"
    />

    <information-nugget
      :lines="[
        { text: 'El centro necesita', type: 'emphasis' },
        { text: '$' + Math.ceil(maxAmountRequired / 1000000) + 'MDP', type: 'accent'},
        { text: 'para atender hasta' },
        { text: maxAmountPatients, type: 'accent' },
        { text: 'niños y niñas' },
      ]"
    />
  </div>
</template>

<script>
import InformationNugget from './InformationNugget'

export default {
  name: "CRITInfo",
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
