<template>
  <!--<img src="../assets/images/design/desktop/Desktop-Pricing.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/tablet/Tablet-Pricing.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 768px;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Pricing.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->
  <!--<img src="../assets/images/design/desktop/Desktop-Pricing-Active.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <HeaderNav/>
  <Hero heroHeight="490px"
        :backgroundColor='true'
        :designLine='true'
        :imgSrcDesktop='require("../assets/images/pricing/desktop/hero.jpg")'
        :imgSrcTablet='require("../assets/images/pricing/tablet/hero.jpg")'
        :imgSrcMobile='require("../assets/images/pricing/mobile/hero.jpg")'
  >
    <template v-slot:hero-title>
      PRICING
    </template>
    <template v-slot:hero-paragraph>
      Create a your stories, Photosnap is a platform for photographers and visual storytellers. 
      It’s the simple way to create and share your photos.  
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