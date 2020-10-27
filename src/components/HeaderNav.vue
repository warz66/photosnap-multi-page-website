<template>
    <header>
      <img src="../assets/images/shared/desktop/logo.svg" alt="">
      <ul>
        <li>STORIES</li>
        <li>FEATURES</li>
        <li>PRICING</li>
      </ul>
      <button><span>GET AN INVITE</span></button>
    </header>
</template>

<script>
export default {
  name: 'HeaderNav',
}
</script>

<style scoped>
  header {
    margin:0 auto;
    display: flex;
    width: 100%;
    height: 72px;
    justify-content: space-around;
    align-items: center;
    padding: 0 48px;
  }
  ul {
    margin-right:11px;
  }
  ul li {
    font-size: 12px;
    letter-spacing: 2px;
    padding: 0px 18px;
    display: inline;
    font-weight: bold;
  }
  button {
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
  button span {
    margin-right:6px;
  }
  button:hover {
    background-color: #D3D3D3;
    color: black;
    cursor: pointer;
  }
  @media (max-width: 1440px) {
    header {
      padding: 0 3.5vw
    }
  }
</style>