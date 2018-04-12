export default {
    created(){
        this.emitFilter();
    },
    data(){
        return {
            filterBy: {bySubject:'', byBody: ''}
        }
    },
    methods: {
        emitFilter(){
            console.log('Emitting Filter!');
            this.$emit('filtered',this.filterBy);
        }
    },
    template: `
        <section class="section email-filter">
            <label>
                <input placeholder="subject" type="text" v-model="filterBy.bySubject" @input="emitFilter" />
            </label> 
            <label>
                <input placeholder="body" v-model="filterBy.byBody" @input="emitFilter" />
            </label> 
        </section>
            `
    };