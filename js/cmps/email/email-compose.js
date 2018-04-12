import emailService from "../../services/email/email.service.js";

export default {

    data() {
        return {
            email: { id:'',subject: '', body: '',isRead:'',sentAt:'' }
        }
    },
    template: `
     <section class="email-compose section">
        <h1 class="title is-1">Email compose</h1>
   <form @submit.prevent="saveEmail">
                        
            <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Subject</label>
            </div>
            <div class="field-body">
                <div class="field">
                <div class="control">
                    <input class="input" type="text" v-model="email.subject" >
                </div>
                <p class="help">
                    This field is required
                </p>
                </div>
            </div>
            </div>

            <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Message</label>
            </div>
            <div class="field-body">
                <div class="field">
                <div class="control">
                    <textarea class="textarea" v-model="email.body" ></textarea>
                </div>
                </div>
            </div>
            </div>

            <div class="field is-horizontal">
            <div class="field-label">
                <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
                <div class="field">
                <div class="control">
                    <button type="submit" class="button is-primary">
                    Send email
                    </button>
                </div>
                </div>
            </div>
            </div>                            
</form>
        </section>
    `,
    methods: {
        saveEmail() {
            console.log(this.email);
            emailService.addEmail(this.email)
                .then(emails => {
                    console.log('saved');
                })
        }
    },
    components: {
        emailService

    }
}