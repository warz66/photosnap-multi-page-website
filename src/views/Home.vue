<template>
  <!--<img src="../assets/images/design/desktop/Desktop-Home-Active.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="../assets/images/design/desktop/Desktop-home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 1440px;">-->
  <!--<img src="./assets/images/design/tablet/Tablet-Home.jpeg" alt="" style="position:absolute; left:0; top:0; z-index: 2; opacity:0.3;  margin: 0; width: 768px;">-->
  <HeaderNav/>
  <section id="create-share">
    <div>
      <h1>
        CREATE AND SHARE YOUR PHOTO STORIES.
      </h1>
      <p>
        Photosnap is a platform for photographers and visual storytellers. We make it 
        easy to share photos, tell stories and connect with others. 
      </p>
      <LinkArrow/>
      <!--<div>
        <span>
          GET AN INVITE
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
      </div>-->
    </div>
    <div>
      <img src="../assets/images/home/desktop/create-and-share.jpg" alt="create-and-share.jpg">
    </div>
  </section>
  <!--div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
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
    //HelloWorld,
  }
}
</script>

<style scoped>
#create-share {
  display: flex; 
  color: white;
  height: 650px;
}
#create-share > div:last-of-type img {
  width: 100%;
  height:650px;
  object-fit: cover;
}
#create-share > div:first-of-type {
  width: 610px;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 0px 7.653vw;
  justify-content: center;
  text-align: start;
}

#create-share div:first-of-type h1 {
  margin-bottom: 21px;
}

#create-share div:first-of-type p {
  margin-bottom: 40px;
}

/*#create-share div:first-of-type div {
  width: max-content;
  font-family: 'DM Sans', sans-serif;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 12px;
  word-spacing: -2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-size 0.3s ease-in;
  background: linear-gradient(white,white) bottom no-repeat;
  background-size: 0px 1px;
  background-position-x: left;
  background-position-y: 17px;
}
#create-share div:first-of-type div:hover {
  background-size: 105px 1px;
}
#create-share div:first-of-type div span {
  vertical-align: bottom;
}
#create-share div:first-of-type div svg {
  stroke: white;
  margin-left: 21px;
}*/
</style>
