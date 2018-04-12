import emailPreview from './email-preview.js'
import emailStatus from './email-status.js'

export default {
    props:{emails:{type: Array, required: true}},
    template: `
    <section class="email-list section">
        <h1 class="title is-3">Email list</h1>

         <ul>
                <li v-for="(email, idx) in emails" :key="email.id">
                  <email-preview :email="email" @click.native="emitSelected(idx)"> </email-preview>
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
        }
    },
    components: {
        emailPreview,
        emailStatus
    }
}

