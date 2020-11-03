<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');
@import './assets/styles/minireset.min.css';
/*@import url("https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css");*/

.attribution { font-size: 12px; text-align: center; margin-top: 10px; padding: 10px; /*color: darkgrey;*/ font-family: 'DM Sans', sans-serif;
background-image: linear-gradient(45deg, #5A77FF, #BC7198, #FFC593);
	background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: hue 5s infinite linear;
}
@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
.attribution a { font-weight: bold; }

body {
  background: linear-gradient(rgba(255,255,255,.05), rgba(255,255,255,.05)), url('./assets/images/design/desktop/presence.png');
}

#app {
  margin-top: 50px !important;
  font-family: 'DM Sans', sans-serif;
  text-align: center;
  max-width: 1440px;
  margin:0 auto;
  font-size: 15px;
  line-height: 25px;
  background-color: white;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.7);
}
@media (max-width: 1457px) {
  #app {
    margin-top: 0px !important;
  }
  .attribution {
    display: none;
  }
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
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
}
h4 {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
}
p {
  opacity: 0.6;
}
a {
  text-decoration: none;
}
</style>
