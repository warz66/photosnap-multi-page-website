<template>

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
          <span>${{ 19*ratio }}.00</span>
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
          <span>${{ 39*ratio }}.00</span>
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
          <span>${{ 99*ratio }}.00</span>
          <p>per month</p>
        </div>
        <button><span>PICK PLAN</span></button>
      </div>
    </div>

</template>

<script>
export default {
  name: 'PricingPlans',
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

/*  info-pricing-period  */

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

/* switch */

.switch {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 32px;
}
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

/* info-pricing-plans */

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
.info-plan-price span {
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.17px;
  font-weight: bold;
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

@media (max-width: 1200px) and (min-width:671px) {
  #info-pricing-period {
    margin-right: 0;
    margin-bottom: 40px;
  }
  #info-pricing-plans {
    flex-direction: column;
    height: 858px;
    width: 100%;
  }
  .info-plan, .info-plan:nth-child(2) {
    width: 100%;
    height: 270px;
    padding: 40px 48px 40px 40px;
    row-gap: 32px;
    justify-content: space-between;
    grid-template-areas: "a b"
                         "c .";
  }
  .info-plan-text {
    width: 270px;
    height: 118px;
    text-align: start;
  }
  .info-plan-price {
      grid-area: b;
      align-self: start;
      text-align: end;
  }
  .info-plan-price span {
    margin-right: 3px;
  }
  .info-plan-price p {
    margin-right: 8px;
  }
  .info-plan:nth-child(2):after {
    height: 100%;
    width: 6px;
    background: linear-gradient(#5A77FF, #BC7198, #FFC593);
  }
}

@media (max-width: 670px) {
  #info-pricing-plans {
    flex-direction: column; 
    width: 100%;
    height: 1269px;
  }
  .info-plan {
    width: 100%;
    max-width: 318px;
    height: 407px !important;
    padding: 56px 22px 40px 22px;
  }
  .info-plan:nth-child(2) {
    padding: 48px 22px 48px 22px;
  }
  #info-pricing-period {
    margin-right: 0;
    margin-bottom: 40px;
  }
  .info-plan button {
     width: 245px;
  }
  .info-plan button {
    margin: 0 auto;
  }
}

</style>

