import emailService from "../../services/email/email.service.js";

export default {
    computed: {
        unreadCount() {
            let unreadEmails = this.emails.filter(email => !email.isRead)
            return unreadEmails.length;
    }
        
      },
    props: {emails:{type: Array, required: true}},
    template:`
    <section class="email-list section">
        <h1>Email status</h1>
        <p>You have:{{unreadCount}} unread emails out of {{emails.length}}</p>
        <progress class="progress is-info" :value="unreadCount" :max="emails.length"></progress>
    </section>
    `
    
}