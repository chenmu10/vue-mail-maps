import emailPreview from './email-preview.js'
import emailStatus from './email-status.js'
import emailFilter from '../../cmps/email/email-filter.js'
import emailService from "../../services/email/email.service.js";

export default {
    props: {
        emails: {
            type: Array,
            required: true
        }
    },
    computed: {
        unreadCount() {
            let unreadEmails = this.emails.filter(email => !email.isRead)
            return unreadEmails.length;
        }

    },
    template: `
    <section class="email-list section box">
        <h1 class="title is-3">My Inbox</h1>

        <div v-if="unreadCount" class="tags has-addons">
            <span class="tag">Unread emails:</span>
            <span class="tag is-danger">{{unreadCount}}</span>
        </div>
        <div v-else>No emails to read! you can go to the beach :)
        </div>

        <email-filter @filtered="setFilter"></email-filter>

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

        <button class="button is-link compost-btn" @click="emitCompose">Compose</button>

        <ul>
            <li v-for="(email, idx) in emails" :key="email.id">
                <email-preview :email="email" @click.native="emitSelected(idx)"> </email-preview>
            </li>
        </ul>

    </section>
    `,
    data() {
        return {}
    },
    methods: {
        emitSelected(idx) {
            this.$emit('selected', idx);
        },
        emitCompose(idx) {
            this.$emit('goToCompose');
        },
        sortEmails(sortBy) {
            debugger;
            if (sortBy === 'subject') {
                this.emails.sort(function (a, b) {
                    if (a.subject < b.subject) return -1;
                    if (a.subject > b.subject) return 1;
                    return 0;
                })
            } else if (sortBy === 'time') {
                this.emails.sort();
            }

            this.emails.sort(function (emailA, emailB) {
                return emailB.sentAt - emailA.sentAt;
            });

        },
        setFilter(filter) {
            emailService.query(filter)
                .then(emails => {
                    console.log('email-app:got emails query FILTER:', emails);
                    this.emails = emails;
                    this.selectedEmail = emails[0];
                })
        },

    },
    components: {
        emailPreview,
        emailStatus,
        emailService,
        emailFilter
    }
}