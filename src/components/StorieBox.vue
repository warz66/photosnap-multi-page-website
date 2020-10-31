<template>
    <div class="storie-box">
        <!--<img class="storie-img-desktop" :src="imgSrcDesktop" alt="create-and-share.jpg">
        <img class="storie-img-mobile" :src="imgSrcMobile" alt="create-and-share.jpg">-->
        <picture>
            <source :srcset="imgSrcMobile" media="(max-width: 500px)" type="image/jpeg">
            <img :src="imgSrcDesktop" alt="create-and-share.jpg">
        </picture>
        <div class="storie-text">
            <span class="storie-date" v-if="date"><slot name="storie-date">{{date}}</slot></span>
            <h3><slot name="storie-title">{{title}}</slot></h3>
            <span class="storie-author">by <slot name="storie-author">{{author}}</slot></span>
            <span class="line"></span>
            <LinkArrow :backgroundColor='true' :linkArrowWidth="'100%'">
                <template v-slot:text>READ STORY</template>  
            </LinkArrow>
        </div>     
    </div>
</template>    


<script>
import LinkArrow from '@/components/LinkArrow.vue'

export default {
  name: 'StorieBox',
  components: {
    LinkArrow,
  },
  props: {
    date: String, 
    imgSrcDesktop: String,
    imgSrcMobile: String,
  },
}
</script>
<style>
@media (hover: hover) and (pointer: fine) {
    .storie-box:hover .link-arrow-text {
        background-size: 100% 1px;
    }
}
</style>
<style scoped>
.storie-box {
    position: relative; 
    width:25%;
    color: white;
    max-height: 500px;
    cursor: pointer;
}
@media (hover: hover) and (pointer: fine) {
    .storie-box:hover {
        transform: translateY(-24px);
        transition: all 0.5s;
    }
    .storie-box:hover::after {
        position: absolute;
        content: ''; 
        width: 100%;
        height: 6px;
        background: linear-gradient(45deg, #FFC593 0%, #BC7198 25%, #5A77FF 50%);
        bottom:0;
        left:0;
    }

}
.storie-box picture {
    width: 100%;
}
.storie-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.storie-text {
    position: absolute;
    width: 77.86%;
    text-align: start;
    bottom: 40px;
    left:50%;
    transform: translateX(-50%);
}
.storie-author {
    font-size: 13px;
}
.line {
    display: block;
    width: 100%;
    height: 1px;
    background-color: #bfbfbf;
    margin: 14px 0 20px 0px ;
}
@media (max-width: 1006px) {
    .storie-box {
        width: 50%;  
    }
    .storie-text {
        width: 79.3%;
    }
}
@media (max-width: 500px) {
    .storie-box {
        width: 100%;
        height: 375px;  
    }
    .storie-box img {
        height: 375px;
    }
    .storie-text {
        width: 83.86%;
    }
}
</style>