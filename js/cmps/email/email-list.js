import emailPreview from './email-preview.js'
import emailStatus from './email-status.js'
import emailService from "../../services/email/email.service.js";

export default {
    props:{emails:{type: Array, required: true}},
    computed: {
        unreadCount() {
            let unreadEmails = this.emails.filter(email => !email.isRead)
            return unreadEmails.length;
    }
        
      },
    template: `
    <section class="email-list section">
        <h1 class="title is-3">Email list</h1>
        <button class="button" @click="sortEmails('subject')">
            <span class="icon">
            <i class="fas fa-sort-alpha-down"></i>
            </span>
            <span>Subject</span>
             </button>
        <button class="button" @click="sortEmails('time')">
            <span class="icon">
            <i class="fas fa-sort-amount-up"></i>
            </span>
            <span>Date</span>
             </button>
        <div v-if="unreadCount" class="tags has-addons">
        <span class="tag">Unread emails:</span>
        <span class="tag is-danger">{{unreadCount}}</span>
        </div>
        <div v-else>No emails to read! you can go to the beach :)
            <br><br>
        </div>
        

         <ul>
                <li v-for="(email, idx) in emails" :key="email.id">
                  <email-preview :email="email" @click.native="emitSelected(idx)" > </email-preview>
                </li>
        </ul>
    </section>
    `,
    data() {
        return {
        }
    },
    methods: {
        emitSelected(idx) {
            this.$emit('selected',idx);
        },
        sortEmails(sortBy) {
            if (sortBy==='subject') {
                this.emails.sort(function(a, b){
                    if(a.subject < b.subject) return -1;
                    if(a.subject > b.subject) return 1;
                    return 0;
                })
            } else if (sortBy==='time'){
                this.emails.sort();
            }

            this.emails.sort(function (emailA, emailB) {
                return emailB.sentAt - emailA.sentAt;
              });
         
        },
    },
    components: {
        emailPreview,
        emailStatus,
        emailService
    }
}

