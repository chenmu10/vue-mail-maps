export default {
    // props: {emails:{type: object, required: true}},
    template:`
    <section class="email-list">
        <h1>Email status</h1>
        <!-- {{email.subject}} -->
        <progress class="progress is-info" value="45" max="100">45%</progress>
    </section>
    `
}