<template>
    <footer>
        <router-link to="/" id="footer-logo">
            <img src="../assets/images/shared/desktop/logo-white.svg" alt="logo white">
        </router-link>
        <LinkArrow :backgroundColor='true' :linkArrowWidth="'163px'">
            GET AN INVITE
        </LinkArrow>
        <div id="footer-social-network">
            <a href="">
                <img src="../assets/images/shared/desktop/facebook.svg" alt="logo facebook">
            </a>
            <a href="">
                <img src="../assets/images/shared/desktop/youtube.svg" alt="logo you-tube">
            </a>
            <a href="">
                <img src="../assets/images/shared/desktop/twitter.svg" alt="logo twitter">
            </a>
            <a href="">
                <img src="../assets/images/shared/desktop/pinterest.svg" alt="logo pinterest">
            </a>
            <a href="">
                <img src="../assets/images/shared/desktop/instagram.svg" alt="logo instagram">
            </a>
        </div>
    </footer>
</template>

<script>
import LinkArrow from '@/components/LinkArrow.vue'

export default {
  name: 'Footer',
  components: {
    LinkArrow,
  },
  props: {
  },
}
</script>

<style scoped>
    footer {
        display: grid;
        background-color:black;
        height: 250px; 
        padding: 64px 165px 64px 171px; 
        color: white;
    }
    a {
        width: max-content;
        height: max-content;
    }
    #footer-logo {
        grid-row: 1 / 1;
    }
    #footer-social-network img {
        transition: all 0.3s ease-in-out;
        filter: brightness(0) invert(1);
    }

    #footer-social-network img:hover {
        filter: brightness(1) invert(0);
    }
</style>