export default {
    data() {
        return {
            filter: { bySubject: '', byBody: '',byRead:'' }
        }
    },
    methods: {
        emitFilter() {
            console.log('Emitting Filter!');
            this.$emit('filtered', this.filter);
        }
    },
    template: `
        <section class="section email-filter">
            <label>
                <input placeholder="subject" type="text" v-model="filter.bySubject" @input="emitFilter" />
            </label> 
            <label>
                <input placeholder="body" v-model="filter.byBody" @input="emitFilter" />
            </label> 

            <!-- <div class="field">
            <div class="control">
                <div class="select is-info">
                <select>
                    <option>All</option>
                    <option>Read</option>
                    <option>unRead</option>
                </select>
                </div>
            </div>
            </div> -->



            <label for="all">All</label>
            <input type="radio" id="all" value="all" v-model="filter.byRead" @change="emitFilter">

            <label for="read">Read</label>
            <input type="radio" id="read" value="read" v-model="filter.byRead" @change="emitFilter">

            <label for="unread">Unread</label>
            <input type="radio" id="unread" value="unread" v-model="filter.byRead" @change="emitFilter">
            

        </section>
            `
};