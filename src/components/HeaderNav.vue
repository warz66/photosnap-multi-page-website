<template>
    <header>
      <div id="header-not-mobile">
        <img src="../assets/images/shared/desktop/logo.svg" alt="">
        <ul>
          <li><router-link to="stories">STORIES</router-link></li>
          <li><router-link to="features">FEATURES</router-link></li>
          <li><router-link to="pricing">PRICING</router-link></li>
        </ul>
        <button><span>GET AN INVITE</span></button>
      </div>
      <div id="header-mobile">
        <img src="../assets/images/shared/desktop/logo.svg" alt="">
        <button :class="[menuState ? 'is-active' : '' ]" @click="toggleMenu"></button>
      </div>
    </header>
    <transition name="slide">
      <div v-if="menuState" id="menu-mobile" :class="[menuState ? 'is-active' : '' ]">
          <ul>
            <li><router-link to="stories">STORIES</router-link></li>
            <li><router-link to="features">FEATURES</router-link></li>
            <li><router-link to="pricing">PRICING</router-link></li>
          </ul>
      </div>
    </transition>  
</template>

<script>
export default {
  name: 'HeaderNav',
  data: function () {
    return {
      menuState: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.menuState = !this.menuState;
    }
  }
}
</script>

<style scoped>
  #header-not-mobile {
    margin:0 auto;
    display: flex;
    width: 100%;
    height: 72px;
    justify-content: space-around;
    align-items: center;
    padding: 0 48px;
  }
  #header-not-mobile ul {
    margin-right:11px;
  }
  #header-not-mobile ul li {
    font-size: 12px;
    letter-spacing: 2px;
    padding: 0px 18px;
    display: inline;
    font-weight: bold;
  }
  #header-not-mobile button {
    border:0;
    width: 158px;
    height: 40px;
    padding: 0px;
    font-family: 'DM Sans', sans-serif;
    background-color: black;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 12px;
    word-spacing: -2px;
    transition: all 0.3s;
  }
  #header-not-mobile button span {
    margin-right:6px;
  }
  #header-not-mobile button:hover {
    background-color: #D3D3D3;
    color: black;
    cursor: pointer;
  }

  #header-mobile {
    display: none;
    padding: 0 24px;
    height: 72px;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    position: relative;
    z-index: 20;
  }

  #header-mobile button {
    border:none;
    outline: 0;
    background-color: white;
    width:20px;
    height:6px;
    padding:0;
    position: relative;
    cursor: pointer;
  }
  #header-mobile button::after,
  #header-mobile button::before{
    content:"";
    width:20px;
    height:1px;
    background-color:black;
    display:block;
    position:absolute;
  }
  #header-mobile button::after {
      transform: translateY(2px);
      transition: transform 0.3s;
  }
  #header-mobile button::before {
      transform: translateY(-3px);
      transition: transform 0.3s;
  }
  #header-mobile button.is-active:after {
      transform:translateY(0px) rotate(-45deg);
  }
  #header-mobile button.is-active:before {
      transform:translateY(0px) rotate(45deg);
  }

  #menu-mobile {
    display: none;
    z-index: 10;
    padding: 32px;
    top: 72px;
    width: 100%;
    position: absolute;
    background-color: white;
  }

  .slide-enter-active {
    animation: slide 0.5s ease-in-out;
  }

  .slide-leave-active {
    animation: slide 0.5s reverse ease-in-out;
  }

  @keyframes slide {
    0% {
      transform: translateY(calc(-100% - 72px));
    } 100% {
      transform: translateY(0px);
    }
  }

  #menu-mobile ul {
    font-weight: bold;
  }

  @media (max-width: 1440px) {
    #header-not-mobile {
      padding: 0 3.5vw
    }
    #header-not-mobile button span {
      margin:0px 6px;
    }
  }
  @media (max-width: 700px) {
    #header-not-mobile {
      display: none;
    }
    #header-mobile {
      display: flex;
    }
    #menu-mobile.is-active {
      display: flex;
      justify-content: center;
    }
  }
</style>