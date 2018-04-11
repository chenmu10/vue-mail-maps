export default {
    props: {email:{type: Object, required: true}},
   
   template:`
     <section>
        <h1>{{email.subject}}</h1>
        <p> read: {{email.isRead}} </p>
    </section>
    `
}


