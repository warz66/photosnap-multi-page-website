<template>
  <img src="../assets/images/design/desktop/Desktop-Home-Active.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">
  <!--<img src="../assets/images/design/desktop/Desktop-home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/tablet/Tablet-Home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 768px;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Menu.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->
  <HeaderNav/>
  <Hero :heroHeight='650'
        :linkArrow='true'
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
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HeaderNav from '@/components/HeaderNav.vue'
//import LinkArrow from '@/components/LinkArrow.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    HeaderNav,
    Hero
  },
}
</script>
