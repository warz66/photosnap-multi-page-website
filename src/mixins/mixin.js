import { imageContext } from '../assets/images'

export default {
    data() {
        return {
            img: imageContext,
            //publicPath: process.env.BASE_URL,
            //pathImg: '../assets/images/',
            pathImg: process.env.VUE_APP_PATH_IMG  
        }
    }
}