<template>
  <div class="lo">
    <h3 class="la">
      Últimos Donativos
    </h3>

    <div class="cc">
      <div class="row lal">
        <div class="col">
        <span>
          Cant.
        </span>
        </div>

        <div class="col">
        <span>
          Origen
        </span>
        </div>



        <div class="col">
        <span class="last text-right" style="justify-content: flex-end;display: flex;">
          Donaciones
        </span>
        </div>
      </div>

      <div v-for="donation in donations" class="row lel">
        <div class="col">
        <span>
          {{donation.amount.toLocaleString()}}
        </span>
        </div>
        <div class="col">
        <span>
          {{donation.type}}
          <small style='white-space: nowrap'>{{donation.state}}</small>
        </span>
        </div>

        <div class="col">
        <span class="last text-right">
          {{donation.noOfDonations}}
        </span>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "Donations",
    computed: {
      donations() {
        return this.$store.state.donations
      }
    }
  }
</script>

<style lang="sass" scoped>
  .lo
    padding: 0 30px

  .la
    color: var(--color-primary)
    font-size: 30px
    display: flex
    justify-content: center

  .col
    padding: 0 0px
    width: 33.33%

  .lel .col
    display: flex
    flex-direction: column
    text-align: left

    & span:first-child
      color: var(--color-primary)
      font-weight: bold

  .lal
    color: var(--color-accent)
    font-size: 14px
    font-weight: bold

  .row
    padding: 5px 0
    display: flex
    justify-content: space-around

  .cc
    padding: 30px

  .last
    text-align: right
</style>
