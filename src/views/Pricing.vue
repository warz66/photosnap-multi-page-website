<template>
  <!--<img src="../assets/images/design/desktop/Desktop-Pricing.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/tablet/Tablet-Pricing.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 768px;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Pricing.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->
  <!--<img src="../assets/images/design/desktop/Desktop-Pricing-Active.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->

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

    <PricingPlans/>

    <div id="info-pricing-compare">
      <h2>COMPARE</h2>

      <table id="table-desktop">
        <thead>
          <tr>
            <th>THE FEATURES</th>
            <th>BASIC</th>
            <th>PRO</th>
            <th>BUSINESS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>UNLIMITED STORY POSTING</th>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
          </tr>
          <tr>
            <th>UNLIMITED PHOTO UPLOAD</th>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
          </tr>
          <tr>
            <th>EMBEDDING CUSTOM CONTENT</th>
            <td></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
          </tr>
          <tr>
            <th>CUSTOMIZE METADATA</th>
            <td></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
          </tr>
          <tr>
            <th>ADVANCED METRICS</th>
            <td></td>
            <td></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
          </tr>
          <tr>
            <th>PHOTO DOWNLOADS</th>
            <td></td>
            <td></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
          </tr>
          <tr>
            <th>SEARCH ENGINE INDEXING</th>
            <td></td>
            <td></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
          </tr>
          <tr>
            <th>CUSTOM ANALYTICS</th >
            <td></td>
            <td></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg></td>
          </tr>
        </tbody>
      </table>

      <table id="table-mobile">
        <thead>
          <tr>
            <th>THE FEATURES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <span class="feature">UNLIMITED STORY POSTING</span>
              <span class="plan basic">
                <span>BASIC</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
              <span class="plan pro">
                <span>PRO</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
              <span class="plan buisiness">
                <span>BUISINESS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
            </th>
          </tr>
          <tr>
            <th>
              <span class="feature">UNLIMITED PHOTO UPLOAD</span>
              <span class="plan basic">
                <span>BASIC</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
              <span class="plan pro">
                <span>PRO</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
              <span class="plan buisiness">
                <span>BUISINESS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
            </th>
          </tr>
          <tr>
            <th>
              <span class="feature">EMBEDDING CUSTOM CONTENT</span>
              <span class="plan basic">
                <span>BASIC</span>
              </span>
              <span class="plan pro">
                <span>PRO</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
              <span class="plan buisiness">
                <span>BUISINESS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
            </th>
          </tr>
          <tr>
            <th>
              <span class="feature">CUSTOMIZE METADATA</span>
              <span class="plan basic">
                <span>BASIC</span>
              </span>
              <span class="plan pro">
                <span>PRO</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
              <span class="plan buisiness">
                <span>BUISINESS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
            </th>
          </tr>
           <tr>
            <th>
              <span class="feature">ADVANCED METRICS</span>
              <span class="plan basic">
                <span>BASIC</span>
              </span>
              <span class="plan pro">
                <span>PRO</span>
              </span>
              <span class="plan buisiness">
                <span>BUISINESS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
            </th>
          </tr>
           <tr>
            <th>
              <span class="feature">PHOTO DOWNLOADS</span>
              <span class="plan basic">
                <span>BASIC</span>
              </span>
              <span class="plan pro">
                <span>PRO</span>
              </span>
              <span class="plan buisiness">
                <span>BUISINESS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
            </th>
          </tr>
           <tr>
            <th>
              <span class="feature">SEARCH ENGINE INDEXING</span>
              <span class="plan basic">
                <span>BASIC</span>
              </span>
              <span class="plan pro">
                <span>PRO</span>
              </span>
              <span class="plan buisiness">
                <span>BUISINESS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
            </th>
          </tr>
           <tr>
            <th>
              <span class="feature">CUSTOM ANALYTICS</span>
              <span class="plan basic">
                <span>BASIC</span>
              </span>
              <span class="plan pro">
                <span>PRO</span>
              </span>
              <span class="plan buisiness">
                <span>BUISINESS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg>
              </span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>   

  </section>

  <InviteBanner/>

</template>

<script>
import Hero from '@/components/Hero.vue'
import PricingPlans from '@/components/PricingPlans.vue'
import InviteBanner from '@/components/InviteBanner.vue'

export default {
  name: 'Features',
  components: {
    Hero,
    PricingPlans,
    InviteBanner
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
@media (max-width: 1200px) and (min-width:671px) {
  #info-pricing {
    padding: 112px 40px;
  }
}
@media (max-width: 670px) {
  #info-pricing {
    padding: 64px 0px;
  }
}

/* #info-pricing-compare */

#info-pricing-compare {
  margin-top: 160px;
}
#info-pricing-compare h2 {
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.17px;
  margin-bottom: 56px;  
}
#table-mobile {
  display: none;
}
#table-desktop {
  width: 731px;
  display: grid;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  grid-template-columns: auto 140px 140px 140px;
  grid-template-rows: 39px repeat(8, 64px);
}
#table-desktop thead,
#table-desktop tbody,
#table-desktop tr {
  display: contents;
}
#table-desktop th, #table-desktop td {
  display: flex;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #DFDFDF;
}
#table-desktop thead th {
  border-bottom: 1px solid black;
}
#table-desktop td {
  justify-content: center;
  align-items: center;
}
#table-desktop thead th:first-of-type {
  align-self: start;
  padding-left: 25px;
}
#table-desktop thead th:not(:first-of-type) {
  justify-content: center;  
}
#table-desktop tbody th:first-of-type {
  justify-self: start;
  align-items: center;
  padding-left: 25px;
}
@media (max-width: 800px) {
  #table-desktop {
    width: 689px;
  }
  #info-pricing-compare {
    margin-top: 112px;
  }
  #info-pricing-compare h2 {
    margin-bottom: 64px;
  }
}
@media (max-width: 784px) {
  #table-desktop {
    width: 100%;
  }
}
@media (max-width: 670px) {
  #table-desktop {
    padding: 0 2.5vw;
  }
}
@media (max-width: 585px) {
  #info-pricing-compare {
    margin-top: 64px;
  }
  #info-pricing-compare h2 {
    display: none;
  }
  #table-desktop {
    display: none;
  }
  #table-mobile { 
    display: block;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
  }
  #table-mobile thead tr { 
    height: 39px;
    display: flex;
    align-items: start;
    border-bottom: 1px solid black;
  }
  #table-mobile tbody th {
    display: grid;
    width: 317px;
    grid-template-areas: "a a a"
                         "b c d";
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 57px auto;
    height: 114px;
    align-items: start;
    border-bottom: 1px solid #DFDFDF;
  }
  #table-mobile tbody .feature{
    grid-area: a;
    margin-top: 5px;
    align-self: center;
  }
  #table-mobile tbody .plan {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 1.667px;
    color: rgba(0,0,0,0.5);
    height: 33px;
  }
  #table-mobile tbody .basic {
    grid-area:b;
  }
  #table-mobile tbody .pro {
    grid-area:c;
  }
  #table-mobile tbody .buisiness {
    grid-area:d;
  }
  @media (max-width: 391px) {
    #table-mobile tbody th {
      width: 80vw;
    }
  }
}
</style>