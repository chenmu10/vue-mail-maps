import eventBus, {USR_MSG_DISPLAY} from '../services/event-bus.service.js'
import toggleBtn from '../cmps/toggle-btn.js'

export default {
    template:`
    <section class="about">
        <h1>About {{greet}}</h1>
        Happy? {{isHappy}}
        <br/><br/><br/> 
        <toggle-btn v-model="isHappy"></toggle-btn>
        <button @click="goHome">Go Home</button>
    </section>
    `,
    data() {
        return {
            isHappy: false, 
            greet: this.$route.params.greet
        }
    },
    methods: {
        goHome() {
            eventBus.$emit(USR_MSG_DISPLAY, {txt:'Going Home...',type:'success'});
            this.$router.push('/')
        }
    },
    components: {
        toggleBtn
    }
    
}