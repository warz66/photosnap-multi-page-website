<template>
  <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');
@import './assets/styles/minireset.min.css';
/*@import url("https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css");*/

#app {
  font-family: 'DM Sans', sans-serif;
  text-align: center;
  max-width: 1440px;
  /*margin:0 auto;*/
  font-size: 15px;
  line-height: 25px;
}

h1, h2 {
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.17px;       
}

p {
  opacity: 60%;
}
</style>
