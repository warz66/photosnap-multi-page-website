<template>
    <section id="hero" :style="'height: '+heroHeight+'px;'">
        <div>
            <span id="design-line"></span>
            <div id="hero-text">
                <h1>
                <slot name="hero-title"></slot>
                </h1>
                <p :style="[ linkArrow ? 'margin-bottom: 40px' : 'margin-bottom: 0' ]">
                <slot name="hero-paragraph"></slot> 
                </p>
                <LinkArrow v-if="linkArrow"/>
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
import LinkArrow from '@/components/LinkArrow.vue'

export default {
  name: 'Hero',
  components: {
    LinkArrow
  },
  data() {
    return {
        heightHeroStyle: String
    }
  },
  props: {
      heroHeight: Number,
      imgSrcDesktop: String,
      imgSrcTablet: String,
      imgSrcMobile: String,
      linkArrow: {
          type: Boolean,
          default: false
      }
  },
  mounted: function() {
    this.resizeDesignLineAndHero();
    window.addEventListener('resize', this.resizeDesignLineAndHero);
  },
  methods: {
    resizeDesignLineAndHero: function() {
      if (window.innerWidth > 600) {
        document.getElementById("design-line").style.height = document.getElementById("hero-text").offsetHeight+'px';
        //document.getElementById("hero").style.height = document.querySelector("#hero img").naturalHeight+'px'; 
      } /*else {
        document.getElementById("hero").style.height = 'auto'; 
      }*/
    }
  },
}
</script>

<style scoped>
#design-line {
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translate(0,-50%);
  width: 6px;
  background: linear-gradient(#5A77FF, #BC7198, #FFC593);
}

#hero {
  display: flex; 
  color: white;
}
#hero > div:last-of-type img {
  max-width: 100%;
  height:100%;
  object-fit: cover;
}
#hero > div:first-of-type {
  background-color: black;
  width: 610px;
  padding: 0px 54px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#hero > div:first-of-type > div {
  width: 387px;
  text-align: start;
}

#hero div:first-of-type {
  position: relative;
}

#hero div:first-of-type h1 {
  margin-bottom: 21px;
}

@media (max-width: 785px) {
  #hero > div:last-of-type img {
    min-width:273px;
  }
  #hero > div:first-of-type {
    background-color: black;
    /**/
  }
  #hero > div:first-of-type > div {
    height: auto;
    width: 100%;
  }
}
@media (max-width: 600px) {
  #design-line {
    height: 128px !important;
    left: calc(128px/2 + 30px);
    top: calc(-128px/2 + 3px);
    width: 6px;
    background: linear-gradient(#5A77FF, #BC7198, #FFC593);
    transform: rotate(90deg);
  }
  #hero {
    flex-direction: column-reverse;
    height: auto !important;
  }
  #hero > div:last-of-type img {
    width: 100%;
    min-width:auto;
    height:100%;
    bottom: 0;
  }
  #hero > div:first-of-type {
    height: auto;
    width: 100%;
    align-items:initial;
    padding: 72px 24px 72px 33px;
  } 
  #hero > div:last-of-type {
    height: 294px;
    width: 100%;
  } 
  #hero div:first-of-type h1 {
    margin-bottom: 16px;
  }
  #hero div:first-of-type p {
    margin-bottom: 16px !important;
  }
}
</style>