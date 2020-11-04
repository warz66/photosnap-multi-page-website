<template>
    <section :id="id" class="hero" :style="'height: '+heroHeight+';'">
        <div>
            <span :id="idDesignLine" class="design-line" v-if="designLine"></span>
            <div :id="idHeroText" class="hero-text">
                <h1>
                  <slot name="hero-title"></slot>
                </h1>
                <p :style="[ linkArrow ? 'margin-bottom: 48px;' : 'margin-bottom: 0 !important;' ]">
                <slot name="hero-paragraph"></slot> 
                </p>
                <LinkArrow v-if="linkArrow" :backgroundColor='this.backgroundColor' :linkArrowWidth="this.linkArrowWidth">
                  {{linkArrowText}} 
                </LinkArrow>
            </div>
        </div>
        <div>
            <picture>
                <source :srcset="imgSrcMobile" media="(max-width: 600px)" type="image/jpeg">
                <source :srcset="imgSrcTablet" media="(max-width: 785px)" type="image/jpeg">
                <img :src="imgSrcDesktop" alt="create-and-share.jpg">
            </picture>     
        </div>
    </section>
</template>

<script>
const uniqueId = require('lodash.uniqueid');
import LinkArrow from '@/components/LinkArrow.vue'

export default {
  name: 'Hero',
  components: {
    LinkArrow
  },
  data() {
    return {
      id: null,
      idDesignLine: null,
      idHeroText: null,
      heightHeroStyle: String
    }
  },
  props: {
      heroHeight: String,
      flexReverse: { 
        type: Boolean,
        default: false
      }, 
      backgroundColor: {
        type: Boolean,
        default: false
      },
      designLine: {
        type: Boolean,
        default: false
      },
      imgSrcDesktop: String,
      imgSrcTablet: String,
      imgSrcMobile: String,
      linkArrowWidth: String,
      linkArrowText: {
        type: String,
        default: 'GET AN INVITE'
      },
      linkArrow: {
          type: Boolean,
          default: false
      }
  },
  beforeMount: function() {
    this.id = 'hero'+uniqueId();
    this.idDesignLine = this.id+'-designLine';
    this.idHeroText = this.id+'-heroText';
  },
  mounted: function() {
    if (this.designLine) {
      this.resizeDesignLine();
      window.addEventListener('resize', this.resizeDesignLine);
    }
    if (this.flexReverse) {
      document.getElementById(this.id).style.flexDirection = 'row-reverse';
    }
    if (this.backgroundColor) {
      document.getElementById(this.id).style.backgroundColor = 'black';
      document.getElementById(this.id).style.color = 'white';
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeDesignLine);
  },
  methods: {
    resizeDesignLine: function() {
      if (window.innerWidth > 600) {
        document.getElementById(this.idDesignLine).style.height = document.getElementById(this.idHeroText).offsetHeight+'px';
      }
    }
  },
}
</script>

<style scoped>
.design-line {
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translate(0,-50%);
  width: 6px;
  background: linear-gradient(#5A77FF, #BC7198, #FFC593);
}

.hero {
  display: flex;
  flex-direction: row; 
  color: black;
  background-color: white;
}
.hero > div:last-of-type img {
  max-width: 100%;
  height:100%;
  object-fit: cover;
}
.hero > div:first-of-type {
  /*background-color: black;*/
  width: 610px;
  padding: 0px 54px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero > div:first-of-type > div {
  width: 387px;
  text-align: start;
}

.hero div:first-of-type {
  position: relative;
}

.hero div:first-of-type h1 {
  margin-bottom: 21px;
}

@media (max-width: 785px) {
  .hero > div:last-of-type img {
    min-width:273px;
  }
  .hero > div:first-of-type > div {
    height: auto;
    width: 100%;
  }
}
@media (max-width: 600px) {
  .design-line {
    height: 128px !important;
    left: calc(128px/2 + 30px);
    top: calc(-128px/2 + 3px);
    width: 6px;
    background: linear-gradient(#5A77FF, #BC7198, #FFC593);
    transform: rotate(90deg);
  }
  .hero {
    flex-direction: column-reverse !important;
    height: auto !important;
  }
  .hero > div:last-of-type img {
    width: 100%;
    /*min-width:auto;*/
    /*height:100%;*/
    /*bottom: 0;*/
  }
  .hero > div:first-of-type {
    /*height: auto;*/
    width: 100%;
    /*align-items:initial;*/
    padding: 72px 24px 72px 33px;
    margin-top: -8px; /* hack a corriger */
  } 
  .hero > div:last-of-type {
    /*height: 294px !important;*/
    width: 100%;
  } 
  .hero div:first-of-type h1 {
    margin-bottom: 16px;
  }
  .hero div:first-of-type p {
    margin-bottom: 23px !important;
  }
}
</style>