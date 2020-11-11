<template>
    <footer>

        <router-link to="/" id="footer-logo">
            <img src="../assets/images/shared/desktop/logo-white.svg" alt="logo white">
        </router-link>

        <LinkArrow id="footer-link" :backgroundColor='true' :linkArrowWidth="'163px'">
            GET AN INVITE
        </LinkArrow>

        <ul id="footer-menu">
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="stories">STORIES</router-link></li>
            <li><router-link to="features">FEATURES</router-link></li>
            <li><router-link to="pricing">PRICING</router-link></li>
        </ul>

        <div id="footer-social-network">
            <a href="#">
                <img src="../assets/images/shared/desktop/facebook.svg" alt="logo facebook">
            </a>
            <a href="#">
                <img src="../assets/images/shared/desktop/youtube.svg" alt="logo you-tube">
            </a>
            <a href="#">
                <img src="../assets/images/shared/desktop/twitter.svg" alt="logo twitter">
            </a>
            <a href="#">
                <img src="../assets/images/shared/desktop/pinterest.svg" alt="logo pinterest">
            </a>
            <a href="#">
                <img src="../assets/images/shared/desktop/instagram.svg" alt="logo instagram">
            </a>
        </div>

        <p id="footer-copyright">Copyright 2019. All Rights Reserved</p>
    </footer>
</template>

<script>
import LinkArrow from '@/components/LinkArrow.vue'

export default {
  name: 'Footer',
  components: {
    LinkArrow,
  },
}
</script>

<style scoped>
    footer {
        display: grid;
        grid-template-areas: "a b c"
                             "d b e";
        grid-template-columns: 278.5px auto auto;
        background-color:black;
        height: 250px; 
        padding: 64px 165px 62px 171px; 
        color: white;
    }
    a {
        width: max-content;
        height: max-content;
        color: white;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 2px;
        font-weight: bold;
    }

    #footer-logo {
        grid-area: a;
    }
    #footer-menu {
        text-align: left;
        grid-area: b;
        justify-self: start;
        align-self: start;

    }
    #footer-menu li {
        display: flex;
    }
    #footer-menu li:not(:last-of-type) {
        margin-bottom: 19px;
    }
    @media (hover: hover) and (pointer: fine) {
        #footer-menu li:hover {
            transition: opacity 0.2s;
            opacity: 0.3;
        }
    }
    #footer-link {
        grid-area: c;
        justify-self: end;
    }
    #footer-copyright {
        grid-area: e;
        justify-self: end;
        align-self: end;
        opacity:0.5;
    }
    #footer-social-network {
        grid-area: d;
        justify-self: start;
        align-self: end;
        display: flex;
        width: 154px;
        justify-content: space-between;
    }
    #footer-social-network img {
        transition: all 0.3s ease-in-out;
        filter: brightness(0) invert(1);
    }

    #footer-social-network img:hover {
        filter: brightness(1) invert(0);
    }

    @media (max-width: 1006px) {
        footer {
            padding: 64px 39px 62px 39px;
        } 
    }
    @media (max-width: 785px) {
        footer {
            height: 284px; 
            grid-template-areas: "a c"
                                 "b b"   
                                 "d e";
            grid-template-columns: 180px auto;
        }
        #footer-menu {
            display: flex;
            flex-direction: row;
            width: 315px;
            justify-content: space-between;
        }
    }
    @media (max-width: 600px) {
        footer {
            height: auto; 
            grid-template-areas: "a"
                                 "d"   
                                 "b"
                                 "c"
                                 "e";
            grid-template-columns: auto;
            grid-template-rows: 50px 69px 240px 48px auto;
            justify-content: center;
            padding: 57px;
        }
        #footer-social-network, #footer-logo, #footer-menu, #footer-link, #footer-copyright {
            justify-self: center;
            align-self: start;
        }
        #footer-menu {
            flex-direction: column;
            width: 100px;
        }
        #footer-menu li {
           justify-content: center;
        }
        #footer-link {
            width: 172px !important;
        }
    }
</style>