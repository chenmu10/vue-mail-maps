

export default {
    props: {email:{type: Object, required: true}},
    data(){
        return {
        }
    },
    computed: {
        
    },
    methods: {
       
    },
    template: `
        <section class="email-details section">
        <h1 class="title is-1">Email Details</h1>
                <h1>{{email.subject}}</h1>
                 <p>{{email.body}}</p>
                <p>read: {{email.isRead}}</p>
                <p>sent at: {{email.sentAt}}</p>
        </section>
            `
  
      
}

