<template>
    <div>
        <span>
          GET AN INVITE
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
    </div> 
</template>

<script>
export default {
  name: 'LinkArrow',
}
</script>

<style scoped>
div {
  padding-top: 3px;
  width: max-content;
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
  background-position-y: 20px;
}
div:hover {
  background-size: 105px 1px;
}
div span {
  vertical-align: bottom;
}
div svg {
  stroke: white;
  margin-left: 21px;
}
</style>