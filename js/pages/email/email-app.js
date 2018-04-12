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
            filter: null,
        }
    },

    template: `
    <section class="email-app section">
        <h1>Email App</h1>
            <email-filter></email-filter>
            <email-list :emails="emails"  @selected="selectEmail" @filtered="setFilter"></email-list>
            <email-details v-if="selectedEmail" :email="selectedEmail" ></email-details>
            <email-compose></email-compose>
            <email-status></email-status>
        <router-view></router-view>
    </section>
    `,

    created() {
        emailService.query()
            .then(emails => {
                console.log('email-app:got emails query filter:', emails);
                this.emails = emails;
                this.selectedEmail = emails[0];
            })

    }
    ,
    methods: {
        selectEmail(idx) {
            this.selectedEmail = this.emails[idx]
        },
        setFilter(filterBy) {
            this.filter = filterBy;
            emailService.filterEmails(this.emails, this.filter)
                .then(filteredEmails => {
                    console.log('filtered: ',filteredEmails);
                    this.emails = filteredEmails
                });
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