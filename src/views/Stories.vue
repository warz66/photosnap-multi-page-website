<template>
    <!--<img src="../assets/images/design/desktop/Desktop-Stories.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
    <!--<img src="../assets/images/design/tablet/Tablet-Stories.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 768px;">-->
    <!--<img src="../assets/images/design/mobile/Mobile-Stories.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->
    <!--<img src="../assets/images/design/desktop/Desktop-Stories-Active.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
    <HeaderNav/>

    <section id="hero-stories">
        <img src="../assets/images/stories/desktop/moon-of-appalacia.jpg" alt="Moon of appalacia hero stories">
        <div id="hero-stories-text">
            <h4>LAST MONTH'S FEATURED STORY</h4>
            <h1>HAZY FULL MOON OF APPALACHIA</h1>
            <div id="hero-stories-text-date-author">
                March 2nd 2020 <strong>by John Appleseed</strong>
            </div>
            <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
            <LinkArrow @mouseover="this.show = 'active'" @mouseleave="this.show = 'inactive'" :backgroundColor='true' :linkArrowWidth="'184px'">
                READ THE STORY 
            </LinkArrow>
        </div>
        <div :class="show" id="hero-stories-effect"></div>
    </section>

    <section class="stories-box">
        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/mountains.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/mountains.jpg")'>
            <template v-slot:storie-date>April 16th 2020</template>
            <template v-slot:storie-title>The Mountains</template>
            <template v-slot:storie-author>John Appleseed</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/cityscapes.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/cityscapes.jpg")'>
            <template v-slot:storie-date>April 14th 2020</template>
            <template v-slot:storie-title>Sunset Cityscapes</template>
            <template v-slot:storie-author>Benjamin Cruz</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/18-days-voyage.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/18-days-voyage.jpg")'>
            <template v-slot:storie-date>April 11th 2020</template>
            <template v-slot:storie-title>18 Days Voyage</template>
            <template v-slot:storie-author>Alexei Borodin</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/architecturals.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/architecturals.jpg")'>
            <template v-slot:storie-date>April 9th 2020</template>
            <template v-slot:storie-title>Architecturals</template>
            <template v-slot:storie-author>Samantha Brooke</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/world-tour.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/world-tour.jpg")'>
            <template v-slot:storie-date>April 7th 2020</template>
            <template v-slot:storie-title>World Tour 2019</template>
            <template v-slot:storie-author>Timothy Wagner</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/unforeseen-corners.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/unforeseen-corners.jpg")'>
            <template v-slot:storie-date>April 3th 2020</template>
            <template v-slot:storie-title>Unforeseen Corners</template>
            <template v-slot:storie-author>William Malcom</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/king-on-africa.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/king-on-africa.jpg")'>
            <template v-slot:storie-date>March 29th 2020</template>
            <template v-slot:storie-title>King on Africa: Part II</template>
            <template v-slot:storie-author>Tim Hillenburg</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/trip-to-nowhere.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/trip-to-nowhere.jpg")'>
            <template v-slot:storie-date>March 21st 2020</template>
            <template v-slot:storie-title>The Trip to Nowhere</template>
            <template v-slot:storie-author>Felicia Rourke</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/rage-of-the-sea.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/rage-of-the-sea.jpg")'>
            <template v-slot:storie-date>March 19th 2020</template>
            <template v-slot:storie-title>Rage of The Sea</template>
            <template v-slot:storie-author>Mohammed Abdul</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/running-free.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/running-free.jpg")'>
            <template v-slot:storie-date>March 16th 2020</template>
            <template v-slot:storie-title>Running Free</template>
            <template v-slot:storie-author>Michelle</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/behind-the-waves.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/behind-the-waves.jpg")'>
            <template v-slot:storie-date>March 11th 2020</template>
            <template v-slot:storie-title>Behind the Waves</template>
            <template v-slot:storie-author>Lamarr Wilson</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/calm-waters.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/calm-waters.jpg")'>
            <template v-slot:storie-date>March 9th 2020</template>
            <template v-slot:storie-title>Calm Waters</template>
            <template v-slot:storie-author>Samantha Brooke</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/milky-way.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/milky-way.jpg")'>
            <template v-slot:storie-date>March 5th 2020</template>
            <template v-slot:storie-title>The Milky Way</template>
            <template v-slot:storie-author>Benjamin Cruz</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/dark-forest.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/dark-forest.jpg")'>
            <template v-slot:storie-date>March 4th 2020</template>
            <template v-slot:storie-title>Night at The Dark Forest</template>
            <template v-slot:storie-author>Mohammed Abdul</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/somwarpet.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/somwarpet.jpg")'>
            <template v-slot:storie-date>March 1st 2020</template>
            <template v-slot:storie-title>Somwarpet’s Beauty</template>
            <template v-slot:storie-author>Michelle</template> 
        </StorieBox>

        <StorieBox :imgSrcDesktop='require("../assets/images/stories/desktop/land-of-dreams.jpg")' 
                   :imgSrcMobile='require("../assets/images/stories/mobile/land-of-dreams.jpg")'>
            <template v-slot:storie-date>February 25th 2020</template>
            <template v-slot:storie-title>Land of Dreams</template>
            <template v-slot:storie-author>William Malcolm</template> 
        </StorieBox>
  </section>    

  <Footer/>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
import LinkArrow from '@/components/LinkArrow.vue'
import StorieBox from '@/components/StorieBox.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Stories',
  components: {
    HeaderNav,
    LinkArrow,
    StorieBox,
    Footer
  },
  data() {
    return {
      show: "inactive"
    }
  },
}
</script>

<style scoped>

    #hero-stories {
        position: relative;
        height: 650px;
    }
    #hero-stories img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media (hover: hover) and (pointer: fine) {
        #hero-stories-effect {
            z-index:0;
            position: absolute;
            top:0;
            left:0;
            width: 720px;
            height: 650px;
            transition: all 1s ease;
            background-image: radial-gradient(circle 650px at 0px 650px , rgb(255,197,147), rgba(188,113,152,0.5), rgba(90,119,255,0));
        }
        .active {
            opacity: 0.5;
        }
        .inactive {
            opacity: 0;
        }
    }
    #hero-stories-text {
        text-align: left;
        color: white;
        position: absolute;
        z-index:1;
        width: 387px;
        left: 7.687vw;
        top: 122px;
    }
    #hero-stories-text h4 {
        margin-bottom: 24px;
    }
    #hero-stories-text h1 {
        margin-bottom: 16px;
    }
    #hero-stories-text-date-author {
        font-size: 13px;
        margin-bottom: 24px;
        line-height: 17px;
    }
    #hero-stories-text p {
        margin-bottom: 24px;    
    }
    .stories-box {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
    @media (max-width: 785px) {
        #hero-stories img {
            content: url("../assets/images/stories/tablet/moon-of-appalacia.jpg");
        }
        #hero-stories-text {
            left: 39px;
        }
        #hero-stories-effect {
            width: 500px;
            background-image: radial-gradient(circle 500px at 0px 650px , rgb(255,197,147), rgba(188,113,152,0.5), rgba(90,119,255,0));
        }
    }
    @media(max-width: 500px) {
        #hero-stories {
            height: auto;
        }
        #hero-stories h4 {
            margin-bottom: 16px;
        }
        #hero-stories img {
            height: auto;
        }
        #hero-stories img {
            content: url("../assets/images/stories/mobile/moon-of-appalacia.jpg");
        }
        #hero-stories-text {
            background-color: black;
            text-align: left;
            color: white;
            position: initial;
            width: 100%;
            margin-top:-8px;
            padding: 48px 28.5px;
            height: auto;
        }
        #hero-stories-effect {
            display: none;
        }
    }
</style>