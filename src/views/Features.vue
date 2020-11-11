<template>
  <!--<img src="../assets/images/design/desktop/Desktop-Features.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/tablet/Tablet-Features.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 768px;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Features.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->
  <!--<img src="../assets/images/design/desktop/Desktop-Features-Active.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->

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

  <section class="features-box">
    <FeatureBox :imgSrc='require("../assets/images/features/desktop/responsive.svg")'>
      <template v-slot:feature-title>
        100% Responsive
      </template>
      <template v-slot:feature-text>
        No matter which the device you’re on, our site is fully responsive and stories 
        look beautiful on any screen.
      </template> 
    </FeatureBox>

    <FeatureBox :imgSrc='require("../assets/images/features/desktop/no-limit.svg")'>
      <template v-slot:feature-title>
        No Photo Upload Limit
      </template>
      <template v-slot:feature-text>
        Our tool has no limits on uploads or bandwidth. Freely upload in bulk and 
        share all of your stories in one go.
      </template> 
    </FeatureBox>  

    <FeatureBox :imgSrc='require("../assets/images/features/desktop/embed.svg")'>
      <template v-slot:feature-title>
        Available to Embed
      </template>
      <template v-slot:feature-text>
        Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, 
        Google Maps, and more.
      </template> 
    </FeatureBox>

        <FeatureBox :imgSrc='require("../assets/images/features/desktop/custom-domain.svg")'>
      <template v-slot:feature-title>
        Custom Domain
      </template>
      <template v-slot:feature-text>
        With Photosnap subscriptions you can host your stories on your own domain. You can 
        also remove our branding!
      </template> 
    </FeatureBox>

    <FeatureBox :imgSrc='require("../assets/images/features/desktop/boost-exposure.svg")'>
      <template v-slot:feature-title>
        Boost Your Exposure
      </template>
      <template v-slot:feature-text>
        Users that viewed your story or gallery can easily get notifed of new and featured 
        stories with our built in mailing list.
      </template> 
    </FeatureBox>  

    <FeatureBox :imgSrc='require("../assets/images/features/desktop/drag-drop.svg")'>
      <template v-slot:feature-title>
        Drag &#38; Drop Image
      </template>
      <template v-slot:feature-text>
        Easily drag and drop your image and get beautiful shots everytime. No over the top 
        tooling to add friction to creating stories.
      </template> 
    </FeatureBox>
  </section>

  <InviteBanner/>

</template>

<script>
import Hero from '@/components/Hero.vue'
import FeatureBox from '@/components/FeatureBox.vue'
import InviteBanner from '@/components/InviteBanner.vue'

export default {
  name: 'Features',
  components: {
    Hero,
    FeatureBox,
    InviteBanner
  },
}
</script>

<style>
.features-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 104px;
  padding: 160px 165px 158px 165px;
}
@media (max-width: 1006px) {
  .features-box {
    padding: 120px 39px;
  } 
} 
@media (max-width: 785px) {
  .features-box {
    grid-template-columns: 1fr 1fr;
    padding: 111px 38.5px;
    row-gap: 76.5px;
  }
  .features-box .feature-box:nth-child(2) > div:first-of-type { /* hack à mieux faire */ 
    /*margin-bottom: 66px;
    height: auto;*/
  }
}
@media (max-width: 500px) {
  .features-box {
    grid-template-columns: 1fr;
    padding: 64px 32.5px 89px 32.5px;
    row-gap: 55px;
  }
  .features-box .feature-box:nth-child(2) > div:first-of-type {
    margin-bottom: 66px;
    height: auto;
  }  
}   
</style>