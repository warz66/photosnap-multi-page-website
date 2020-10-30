<template>
  <!--<img src="../assets/images/design/desktop/Desktop-Features.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/tablet/Tablet-Features.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 768px;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Features.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->
  <!--<img src="../assets/images/design/desktop/Desktop-Features-Active.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <HeaderNav/>
  <Hero heroHeight="490px"
        :backgroundColor='true'
        :designLine='true'
        :imgSrcDesktop='require("../assets/images/features/desktop/hero.jpg")'
        :imgSrcTablet='require("../assets/images/features/tablet/hero.jpg")'
        :imgSrcMobile='require("../assets/images/features/mobile/hero.jpg")'
  >
    <template v-slot:hero-title>
      FEATURES
    </template>
    <template v-slot:hero-paragraph>
      We make sure all of our features are designed to be loved by every aspiring and even 
      professional photograpers who wanted to share their stories.  
    </template> 
  </Hero>   
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Features',
  components: {
    HeaderNav,
    Hero
  },
}
</script>