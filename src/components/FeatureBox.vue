<template>
    <div class="feature-box">
        <div>
            <img :src="imgSrc" alt="">
        </div>
        <div>
            <h3 class="feature-title">
                <slot name="feature-title"></slot>
            </h3>
            <p class="feature-text">
                <slot name="feature-text"></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FeatureBox',
  props: {
    imgSrc: String
  },
}
</script>

<style scoped>
    .feature-box {
        display: flex;
        flex-direction: column;
    }
    .feature-box > div:first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 49px;
        height: 72px;
    }
    .feature-box > div:first-of-type img {
        display: block;
    }
    .feature-title {
        margin-bottom: 16px;
    }
</style>