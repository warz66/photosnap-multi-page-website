<template>
    <section id="invite-banner">
        <h2>WE'RE IN BETA. GET YOUR INVITE TODAY!</h2>
        <LinkArrow :backgroundColor='true' :linkArrowWidth="'163px'">
            GET AN INVITE 
        </LinkArrow>
    </section>
</template>

<script>
import LinkArrow from '@/components/LinkArrow.vue'

export default {
  name: 'InviteBanner',
  components: {
    LinkArrow
  },
}
</script>

<style scoped>
    #invite-banner {
        display: flex;
        position: relative;
        color: white;
        justify-content: space-between;
        align-items: center;
        padding: 68px 165px;
        width: 100%;
        height: 280px;
        background-image: url("../assets/images/shared/desktop/bg-beta.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }
    #invite-banner:after {
        content: '';
        position: absolute;
        height: 100%;
        width: 6px;
        top:0;
        left:0;
        background: linear-gradient(#5A77FF, #BC7198, #FFC593);
    }
    #invite-banner h2 {
        width: 400px;
        height: 144px;
        text-align: start;
    }
    @media (max-width:1006px) {
        #invite-banner {
            padding: 68px 39px 68px 39px;
            background-image: url("../assets/images/shared/tablet/bg-beta.jpg");
        }
    }
    @media (max-width:660px) {
        #invite-banner h2 {
            width: 310px;
            height: 120px;
            text-align: start;
        }
    }
    @media (max-width:580px) {
        #invite-banner {
            flex-direction: column;
            background-image: url("../assets/images/shared/mobile/bg-beta.jpg");
            align-items: start;
            height: 287px;
            padding: 64px 32px 64px 33px;
        }

        #invite-banner:after {
            height: 6px;
            width: 128px;
            top:0;
            left:33px;
            background: linear-gradient(90deg, #FFC593 0%, #BC7198 25%, #5A77FF 50%);
        }
    }
    @media (max-width: 365px) {
        #invite-banner {
            padding: 32px 16px;
            justify-content: space-between;
        }
        #invite-banner h2 {
            width: 100%;
        }
    }
</style>
