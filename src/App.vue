<template>
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
  margin:0 auto;
  font-size: 15px;
  line-height: 25px;
}

h1, h2 {
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.17px;       
}
@media (max-width: 660px) {
  h1, h2 {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 3.33px;       
  }
}
h3 {
  font-size:18px;
  line-height: 25px;
  font-weight: bold;
}

p {
  opacity: 0.6;
}
a {
  text-decoration: none;
}
</style>
