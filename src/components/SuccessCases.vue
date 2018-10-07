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
      <img :src="img" :alt='patientName' class="child"/>
    </div>
    <p class='text-read text-read--small'>
      <small>
        {{testimony}}
      </small>
    </p>
  </section>
</template>

<script>
import img1 from '../assets/photos/n1.jpg'
import img2 from '../assets/photos/n2.jpg'
import img3 from '../assets/photos/n3.png'
import img4 from '../assets/photos/n4.jpg'


const randomImage = () => {
  const random = Math.ceil(Math.random() * 100)

  console.log(random)

  if (random > 0 && random <= 25) {
    return  img1
  } else if (random > 25 && random <= 50) {
    return img2
  } else if (random > 50 && random <= 75) {
    return img3
  } else if (random > 75 && random <= 100) {
    return img4
  } else {
    return img1
  }
}

export default {
  name: 'SuccessCases',
  data() {
    return {
      img: randomImage()
    }
  },
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

<style lang="sass" scoped>
  .patient-photo
    width: 150px
    height: 150px 
    border-radius: 50%
    overflow: hidden
    margin: auto
  .child
    min-width: 150px
    min-height: 150px
    height: auto
    width: auto
</style>