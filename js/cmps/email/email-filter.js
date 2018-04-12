export default {
    // created() {
    //     this.emitFilter();
    // },
    data() {
        return {
            filterBy: { bySubject: '', byBody: '',byRead:'' }
        }
    },
    methods: {
        emitFilter() {
            console.log('Emitting Filter!');
            this.$emit('filtered', this.filterBy);
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

            <label for="all">All</label>
            <input type="radio" id="all" value="all" v-model="filterBy.byRead" @change="emitFilter">

            <label for="read">Read</label>
            <input type="radio" id="read" value="true" v-model="filterBy.byRead" @change="emitFilter">

            <label for="unread">Unread</label>
            <input type="radio" id="unread" value="false" v-model="filterBy.byRead" @change="emitFilter">
            

        </section>
            `
};