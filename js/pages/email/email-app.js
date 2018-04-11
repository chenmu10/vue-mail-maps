import emailService from "../../services/email/email.service.js";

import emailList from '../../cmps/email/email-list.js'
import emailFilter from '../../cmps/email/email-filter.js'
import emailCompose from '../../cmps/email/email-compose.js'
import emailDetails from '../../cmps/email/email-details.js'



export default {
    template:`
    <section class="email-app container">
        <h1>Email App</h1>
            <email-filter></email-filter>
            <email-list :emails="emails"></email-list>
            <email-details></email-details>
            <email-compose></email-compose>
        <router-view></router-view>
    </section>
    `,
    data() {
        return {
            emails: []
        }
    },
    created() {
        emailService.query()
        .then (emails => {
            console.log('email-app:got emails query filter:',emails);
            this.emails=emails
        })
       
        // emailService.addEmail({body:'a',subject:'b'})
        // .then (emails => {
        //     // console.log(emails);
            
        // }),
        // emailService.getById(1)
        // .then (emails => {
        //     // console.log('get by id:',emails);
            
        // }),
        // emailService.deleteEmail(1)
        // .then (emails => {
        // })
        
    }
    ,
    components: {
        emailList,
        emailFilter,
        emailCompose,
        emailDetails

    }
}