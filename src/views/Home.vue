<template>
  <!--<img src="../assets/images/design/desktop/Desktop-Home-Active.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/desktop/Desktop-home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/tablet/Tablet-Home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 768px;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Menu.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->

  <Hero heroHeight="650px"
        :backgroundColor='true'
        :designLine='true'
        :linkArrow='true'
        linkArrowWidth="168px"
        :imgSrcDesktop='require("../assets/images/home/desktop/create-and-share.jpg")'
        :imgSrcTablet='require("../assets/images/home/tablet/create-and-share.jpg")'
        :imgSrcMobile='require("../assets/images/home/mobile/create-and-share.jpg")'>
    <template v-slot:hero-title>
      CREATE AND SHARE YOUR PHOTO STORIES.
    </template>
    <template v-slot:hero-paragraph>
      Photosnap is a platform for photographers and visual storytellers. We make it 
      easy to share photos, tell stories and connect with others.  
    </template> 
  </Hero>

  <Hero heroHeight="600px"
        :flexReverse='true'
        :linkArrow='true'
        linkArrowWidth="205px"
        linkArrowText="VIEW THE STORIES"
        :imgSrcDesktop='require("../assets/images/home/desktop/beautiful-stories.jpg")'
        :imgSrcTablet='require("../assets/images/home/tablet/beautiful-stories.jpg")'
        :imgSrcMobile='require("../assets/images/home/mobile/beautiful-stories.jpg")'>
    <template v-slot:hero-title>
      BEAUTIFUL STORIES<br>EVERY TIME
    </template>
    <template v-slot:hero-paragraph>
      We provide design templates to ensure your stories look terrific. Easily add 
      photos, text, embed maps and media from other networks. Then share your story 
      with everyone.  
    </template> 
  </Hero>

  <Hero heroHeight="600px"
        :linkArrow='true'
        linkArrowWidth="205px"
        linkArrowText="VIEW THE STORIES"
        :imgSrcDesktop='require("../assets/images/home/desktop/designed-for-everyone.jpg")'
        :imgSrcTablet='require("../assets/images/home/tablet/designed-for-everyone.jpg")'
        :imgSrcMobile='require("../assets/images/home/mobile/designed-for-everyone.jpg")'>
    <template v-slot:hero-title>
      DESIGNED FOR EVERYONE
    </template>
    <template v-slot:hero-paragraph>
      Photosnap can help you create stories that resonate with your audience.  Our 
      tool is designed for photographers of all levels, brands, businesses you name it.  
    </template> 
  </Hero>

  <section class="stories-box">
    <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/mountains.jpg")' 
               :imgSrcMobile='require("../assets/images/stories/mobile/mountains.jpg")'>
      <template v-slot:storie-title>
        The Mountains
      </template>
      <template v-slot:storie-author>
        John Appleseed 
      </template> 
    </StorieBox>

    <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/cityscapes.jpg")' 
               :imgSrcMobile='require("../assets/images/stories/mobile/cityscapes.jpg")'>
      <template v-slot:storie-title>
        Sunset Cityscapes
      </template>
      <template v-slot:storie-author>
        Benjamin Cruz
      </template> 
    </StorieBox>

    <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/18-days-voyage.jpg")' 
               :imgSrcMobile='require("../assets/images/stories/mobile/18-days-voyage.jpg")'>
      <template v-slot:storie-title>
        18 Days Voyage
      </template>
      <template v-slot:storie-author>
        Alexei Borodin 
      </template> 
    </StorieBox>
    <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/architecturals.jpg")' 
               :imgSrcMobile='require("../assets/images/stories/mobile/architecturals.jpg")'>
      <template v-slot:storie-title>
        Architecturals
      </template>
      <template v-slot:storie-author>
        Samantha Brooke 
      </template> 
    </StorieBox>
  </section>

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
  </section>

</template>

<script>

import Hero from '@/components/Hero.vue'
import StorieBox from '@/components/StorieBox.vue'
import FeatureBox from '@/components/FeatureBox.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    StorieBox,
    FeatureBox
  },
}
</script>

<style scoped>
.stories-box {
  /*margin-top: 42px;*/ /* mobile ajuste test */
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.features-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 104px;
  padding: 120px 11.325vw;
}
@media (max-width: 1006px) {
  .features-box {
    padding: 120px 39px;
  } 
} 
@media (max-width: 785px) {
  .features-box {
    grid-template-columns: 1fr;
    padding: 120px 19.81vw;
    row-gap: 80px;
  }
  .features-box .feature-box:nth-child(2) > div:first-of-type { /* hack à mieux faire */ 
    margin-bottom: 66px;
    height: auto;
  }
}
@media (max-width: 500px) {
  .features-box {
    padding: 80px 8.29vw;
    row-gap: 56px;
  }  
}   

</style>
