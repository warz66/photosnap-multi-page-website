<template>
  <!--<img src="../assets/images/design/desktop/Desktop-Home-Active.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/desktop/Desktop-home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/tablet/Tablet-Home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 768px;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.1;  margin: 0; width: 375x;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Menu.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->

  <HeaderNav/>

  <Hero heroHeight="650px"
        :backgroundColor='true'
        :designLine='true'
        :linkArrow='true'
        linkArrowWidth="168px"
        :imgSrcDesktop='require("../assets/images/home/desktop/create-and-share.jpg")'
        :imgSrcTablet='require("../assets/images/home/tablet/create-and-share.jpg")'
        :imgSrcMobile='require("../assets/images/home/mobile/create-and-share.jpg")'
  >
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
        :imgSrcMobile='require("../assets/images/home/mobile/beautiful-stories.jpg")'
  >
    <template v-slot:hero-title>
      BEAUTIFUL STORIES EVERY TIME
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
        :imgSrcMobile='require("../assets/images/home/mobile/designed-for-everyone.jpg")'
  >
    <template v-slot:hero-title>
      DESIGNED FOR EVERYONE
    </template>
    <template v-slot:hero-paragraph>
      Photosnap can help you create stories that resonate with your audience.  Our 
      tool is designed for photographers of all levels, brands, businesses you name it.  
    </template> 
  </Hero>
</template>

<script>

import HeaderNav from '@/components/HeaderNav.vue'
import Hero from '@/components/Hero.vue'


export default {
  name: 'Home',
  components: {
    HeaderNav,
    Hero,
  },
}
</script>
