import emailService from "../../services/email/email.service.js";

import emailList from '../../cmps/email/email-list.js'
import emailFilter from '../../cmps/email/email-filter.js'
import emailCompose from '../../cmps/email/email-compose.js'
import emailDetails from '../../cmps/email/email-details.js'
import emailStatus from '../../cmps/email/email-status.js'



export default {
    template: `
    <section class="email-app container">
        <h1>Email App</h1>
            <email-filter></email-filter>
            <email-list :emails="emails"  @selected="selectEmail"></email-list>
            <email-details :email="selectedEmail" ></email-details>
            <email-compose></email-compose>
            <email-status></email-status>
        <router-view></router-view>
    </section>
    `,
    data() {
        return {
            emails: [],
            filter: null,
            selectedEmail: null,
            filteredEmails: [],
        }
    },
    created() {
        emailService.query()
            .then(emails => {
                console.log('email-app:got emails query filter:', emails);
                this.emails = emails;
                console.log('emails',this.emails);
                this.selectedEmail= emails[0];
                console.log('selected',this.selectedEmail);
            })


    }
    ,
    methods: {
        selectEmail(){
            this.selectedEmail = this.emails[0]
        },
        setFilter(filterBy){
            this.filter  = filterBy;
            emailService.filterEmails(this.emails, this.filter)
                .then(curEmails => {
                    this.filteredEmails = currEmails
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