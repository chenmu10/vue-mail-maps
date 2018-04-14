import eventBus, {USR_MSG_DISPLAY} from '../services/event-bus.service.js'


export default {
    template:`
    <section class="about section box">
    <h1 class="title"> About </h1>
    <hr>
    <div class="content">
      <h1> Hello World </h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. </p>
      <h2> Second level </h2>
      <p> Curabitur accumsan turpis pharetra <strong> augue tincidunt </strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl. </p>
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
    
    
}