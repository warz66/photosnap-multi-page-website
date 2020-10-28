<template>
  <!--<img src="../assets/images/design/desktop/Desktop-Home-Active.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/desktop/Desktop-home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/tablet/Tablet-Home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 768px;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->
  <!--<img src="../assets/images/design/mobile/Mobile-Menu.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 375x;">-->
  <HeaderNav/>
  <section id="hero">
    <div>
      <span id="design-line" ></span>
      <div id="hero-text">
        <h1>
          CREATE AND SHARE YOUR PHOTO STORIES.
        </h1>
        <p>
          Photosnap is a platform for photographers and visual storytellers. We make it 
          easy to share photos, tell stories and connect with others. 
        </p>
        <LinkArrow/>
      </div>
    </div>
    <div>
      <img src="../assets/images/home/desktop/create-and-share.jpg" alt="create-and-share.jpg">
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import LinkArrow from '@/components/LinkArrow.vue'

export default {
  name: 'Home',
  components: {
    HeaderNav,
    LinkArrow
  },
  mounted: function() {
    this.resizeDesignLine();
    window.addEventListener('resize', this.resizeDesignLine);
  },
  methods: {
    resizeDesignLine: function() {
      if (window.innerWidth > 600) {
        console.log(window.innerWidth);
        document.getElementById("design-line").style.height = document.getElementById("hero-text").offsetHeight+'px';
      }
    }
  }
}
</script>

<style scoped>
#design-line {
  position: absolute;
  /*height: 304px;*/
  left: 0px;
  top: 50%;
  transform: translate(0,-50%);
  width: 6px;
  background: linear-gradient(#5A77FF, #BC7198, #FFC593);
}

#hero {
  display: flex; 
  color: white;
  height: 650px;
}
#hero > div:last-of-type img {
  max-width: 100%;
  height:650px;
  object-fit: cover;
}
#hero > div:first-of-type {
  background-color: black;
  width: 610px;
  height:650px;
  padding: 0px 54px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#hero > div:first-of-type > div {
  height: 304px;
  width: 387px;
  text-align: start;
}

#hero div:first-of-type {
  position: relative;
}

#hero div:first-of-type h1 {
  margin-bottom: 21px;
}

#hero div:first-of-type p {
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  #hero > div:last-of-type img {
    content: url("../assets/images/home/tablet/create-and-share.jpg");
    min-width:273px;
  }
  #hero > div:first-of-type {
    background-color: black;
    /*max-width: 610px;*/
    padding: 72px 24px 72px 33px;
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
    /*align-items: flex-end;*/
    height: 713px;
  }
  #hero > div:last-of-type img {
    content: url("../assets/images/home/mobile/create-and-share.jpg");
    width: 100%;
    height:294px;
    bottom: 0;
  }
  #hero > div:first-of-type {
    height: 419px;
    width: 100%;
    align-items:initial;
  } 
    #hero > div:last-of-type {
    height: 294px;
    width: 100%;
  } 
  #hero div:first-of-type h1 {
    margin-bottom: 16px;
  }
  #hero div:first-of-type p {
    margin-bottom: 16px;
  }
  @media (max-width: 340px) {
    #hero > div:first-of-type {
      background-color: black;
      padding: 6vw 1vw 8vw 6vw;
    }
  }
}
</style>
