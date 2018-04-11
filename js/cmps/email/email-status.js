export default {
    // props: {emails:{type: object, required: true}},
    template:`
    <section class="email-list section">
        <h1>Email status</h1>
        <!-- {{email.subject}} -->
        <progress class="progress is-info" value="45" max="100">45%</progress>
    </section>
    `
}