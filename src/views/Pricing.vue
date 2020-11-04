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
        :imgSrcMobile='require("../assets/images/pricing/mobile/hero.jpg")'>
    <template v-slot:hero-title>
      PRICING
    </template>
    <template v-slot:hero-paragraph>
      Create a your stories, Photosnap is a platform for photographers and visual storytellers. 
      It’s the simple way to create and share your photos.  
    </template> 
  </Hero>

  <section id="info-pricing">

    <div id="info-pricing-period">
      <span :style="[ checked ? 'opacity: 0.5;' : 'opacity: 1;' ]">Monthly</span>
      <div id="div-switch">
        <label class="switch">
          <input type="checkbox" v-model="checked">
          <span class="slider round"></span>
        </label>
      </div>
      <span :style="[ !checked ? 'opacity: 0.5;' : 'opacity: 1;' ]">Yearly</span>
    </div>

    <div id="info-pricing-plans">

      <div class="info-plan">
        <div class="info-plan-text">
          <h2>Basic</h2>
          <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
        </div>
        <div class="info-plan-price">
          <h1>${{ 19*ratio }}.00</h1>
          <p>per month</p>
        </div>
        <button><span>PICK PLAN</span></button>
      </div>

      <div class="info-plan">
        <div class="info-plan-text">
          <h2>Pro</h2>
          <p>More advanced features available. Recommended for photography veterans and professionals.</p>
        </div>
        <div class="info-plan-price">
          <h1>${{ 39*ratio }}.00</h1>
          <p>per month</p>
        </div>
        <button><span>PICK PLAN</span></button>
      </div>

      <div class="info-plan">
        <div class="info-plan-text">
          <h2>Business</h2>
          <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
        </div>
        <div class="info-plan-price">
          <h1>${{ 99*ratio }}.00</h1>
          <p>per month</p>
        </div>
        <button><span>PICK PLAN</span></button>
      </div>

    </div>

    <div id="info-pricing-compare">

    </div>   

  </section>

  <InviteBanner/>

  <Footer/>

</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
import Hero from '@/components/Hero.vue'
import InviteBanner from '@/components/InviteBanner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Features',
  components: {
    HeaderNav,
    Hero,
    InviteBanner,
    Footer
  },
  data() {
    return {
      checked: false,
      ratio: 1
    }
  },
  watch: {
    checked: function() {
      this.ratio = (this.checked ? 10 : 1);
    }
  },
}
</script>

<style scoped>

#info-pricing {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 165px 160px 165px;
}
#info-pricing-period {
  display: flex;
  align-items: center;
  width: 255px;
  height: 32px;
  margin-right: 15px;
  margin-bottom: 48px;
}
#info-pricing-period span {
  font-weight: bold;
  font-size: 18px;
  transition: opacity 0.4s;
}
#info-pricing-period span .checked {
  opacity: 0.5;
}
#div-switch {
  padding: 0 32px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 32px;
}
/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #DFDFDF;
  transition: .4s;
  border-radius: 32px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 4px;
  bottom: 4px;
  background-color: black;
  transition: .4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: black;
}
input:checked + .slider:before {
  transform: translateX(32px);
  background-color: white;
}


#info-pricing-plans {
  width:1110px;
  height: 470px;
  display:flex;
  justify-content: space-between;
  align-items: center; 
}
.info-plan {
  width: 350px;
  height: 407px;
  padding: 56px 40px 40px 40px;
  background-color: #F5F5F5;
  display: grid;
  justify-content: center;
  row-gap: 40px;
  grid-template-areas: "a"
                       "b"
                       "c";
}
.info-plan:nth-child(2) {
  height:470px;
  position: relative;
  background-color: black;
  color: white;
  padding: 88px 40px 71px 40px;
}
.info-plan:nth-child(2) button {
  background-color: white;
  color: black;
}
.info-plan:nth-child(2) button:hover {
  background-color: #DFDFDF;
}
.info-plan:nth-child(2):after {
  content: '';
  position: absolute;
  height: 6px;
  width: 100%;
  top:0;
  left:0;
  background: linear-gradient(90deg, #FFC593 0%, #BC7198 25%, #5A77FF 50%);
}
.info-plan-text {
  grid-area: a;
}
.info-plan-text h2 {
  margin-bottom: 18px;
}
.info-plan-price {
  grid-area: b;
  align-self: end;
}
.info-plan button {
  grid-area: c;
  align-self: end;
  height: 40px;
  width: 270px;
  letter-spacing: 2px;  
  font-size: 12px;
  transition: all 0.3s ease-in-out;
  word-spacing: -2px;
  border:0;
  padding: 0px;
  font-family: 'DM Sans', sans-serif;
  background-color: black;
  color: white;
  font-weight: bold;
}
.info-plan button:hover {
  background-color: #D3D3D3;
  color: black;
  cursor: pointer;
}

#info-pricing-compare {
  height: 976px;
}
</style>