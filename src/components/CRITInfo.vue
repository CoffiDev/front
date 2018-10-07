<template>
  <div class="crit-info">
    <svg class='crit-illustration'>
      <use :xlink:href="['#icon-center-' + getIllustration()]" />
    </svg>
    <div class="text-center">
      <select @change="handleSelectCRIT" name="" id="" class='select'>
        <option
          :value="option.name"
          v-for="option in options"
        >
          {{option.name}}
        </option>
      </select>
    </div>  

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
  name: "CritInfosss",
  data() {
    return {
      selectedC: {}
    }
  },
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
    },
    handleSelectCRIT: {
      type: Function
    },
    options: Array
  },
  watch: {
    selectedC(val) {
      this.handleSelectCRIT(val)
    }
  },
  data () {
    return {
      getIllustration: () => {
        const illustrations = ['cat', 'cdmx', 'edo']
        const illustration = Math.round(Math.random() * 3)
        return illustrations[illustration]
      },
    }
  }
}
</script>
