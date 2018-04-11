export default {
    props: ['emails'],
    template: `
    <section class="email-list">
        <h1>Email list</h1>

         <ul>
                <li v-for="email in emails">
                    {{email}}
                </li>
        </ul>
    </section>
    `,
    data() {
        return {
        }
    },
}