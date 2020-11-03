<template>
    <a :style="'width: '+linkArrowWidth+';'">
        <span class="link-arrow-text" :style="[backgroundColor ? 'background-image: linear-gradient(white,white);' : 'background-image: linear-gradient(black,black);']">
          <slot></slot>
        </span>
        <svg :stroke="[ backgroundColor ? 'white' : 'black' ]"
        xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
    </a> 
</template>

<script>
export default {
  name: 'LinkArrow',
  props: {
    linkArrowWidth: String,
    backgroundColor: Boolean
  },
}
</script>

<style scoped>
a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: max-content;
}
a span {
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 12px;
  word-spacing: -2px;
  line-height: 100%;
  transition: background-size 0.3s ease-in;
  background: linear-gradient(white,white);
  background-repeat: no-repeat;
  background-size: 0px 1px;
  background-position-x: left;
  background-position-y: 11px;
}
@media (hover: hover) and (pointer: fine) {
  a:hover > span {
    background-size: 100% 1px;
  }
}
</style>