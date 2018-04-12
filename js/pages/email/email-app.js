import emailService from "../../services/email/email.service.js";

import emailList from '../../cmps/email/email-list.js'
import emailFilter from '../../cmps/email/email-filter.js'
import emailCompose from '../../cmps/email/email-compose.js'
import emailDetails from '../../cmps/email/email-details.js'
import emailStatus from '../../cmps/email/email-status.js'



export default {
    data() {
        return {
            emails: [],
            selectedEmail: null,
        }
    },

    template: `
    <section class="email-app section">
        <h1>Email App</h1>
            <email-filter @filtered="setFilter"></email-filter>
            <button class="button is-link is-medium compost-btn">Compose</button>
            
            <section class="email-body">
                <email-list :emails="emails"  @selected="selectEmail" ></email-list>
                <!-- <div class="emailapp-details"> -->
                <email-details v-if="selectedEmail" :email="selectedEmail" ></email-details>

                <!-- </div> -->
            </section>
            <email-compose @saveEmail="saveEmail"></email-compose>
            <email-status></email-status>
        <router-view></router-view>
    </section>
    `,

    created() {
        emailService.query()
            .then(emails => {

                console.log('email-app:got emails query :', emails);
                this.emails = emails;
                this.selectedEmail = emails[0];

            })

    }
    ,
    methods: {
        selectEmail(idx) {
            this.selectedEmail = this.emails[idx];
            this.selectedEmail.isRead = true;
            
        },
        setFilter(filter) {
            emailService.query(filter)
                .then(emails => {
                    console.log('email-app:got emails query FILTER:', emails);
                    this.emails = emails;
                    this.selectedEmail = emails[0];
                })
        },
        saveEmail(email) {
            emailService.addEmail(email)
            .then(emails => {
               this.emails = emails
            })

        }
        
    },
    components: {
        emailList,
        emailFilter,
        emailCompose,
        emailDetails,
        emailStatus

    }
}