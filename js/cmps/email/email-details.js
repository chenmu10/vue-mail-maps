

export default {
    props: {email:{type: Object, required: true}},
    data(){
        return {
        }
    },
    computed: {
        
    },
    methods: {
        deleteEmail() {
            this.$emit('deleteEmail' , this.email.id);
        },
    },
    template: `
        <section class="email-details section box">
        <h1 class="title is-1">{{email.subject}}</h1>
           
                 <p>{{email.body}}</p>
               
                <button class="button is-danger is-outlined" @click="deleteEmail();" >delete</button>
        </section>
        
            `
  
      
}

// <p>read: {{email.isRead}}</p>
// <p>sent at: {{email.sentAt}}</p>