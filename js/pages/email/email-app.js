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
            isCompose: false
        }
    },

    template: `
    <section class="email-app section">
     
         
            
            
            <section class="email-body">
                <email-list :emails="emails"  @selected="selectEmail" @goToCompose="isCompose=true" ></email-list>
                <!-- <div class="emailapp-details"> -->
                <email-details v-if="selectedEmail&&!isCompose" @deleteEmail="deleteEmail" :email="selectedEmail" ></email-details>
                <email-compose v-else @saveEmail="saveEmail"></email-compose>
                <!-- </div> -->
            </section>
           
            <email-status :emails="emails"></email-status>
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

    },
    methods: {
        selectEmail(idx) {
            this.selectedEmail = this.emails[idx];
            if (this.selectedEmail.isRead) {
                this.selectedEmail.isRead = false;
            } else this.selectedEmail.isRead = true;
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
                    this.emails = emails;
                    this.isCompose = false;
                })

        },
        deleteEmail(id) {
            emailService.deleteEmail(id)
                .then(res => {
                    console.log(`email was deleted`);
                })
        },

    },
    components: {
        emailList,
        emailFilter,
        emailCompose,
        emailDetails,
        emailStatus

    }
}