export default {
    data() {
        return {
            filter: { byText: '',byRead:'all' }
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
          
          


  <div class="control">
    <input class="input" type="text" placeholder="Search" v-model="filter.byText" @input="emitFilter">
  </div>
  


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



            <input type="radio" id="all" value="all" v-model="filter.byRead" @change="emitFilter">
            <label for="all">All</label>

            <input type="radio" id="read" value="read" v-model="filter.byRead" @change="emitFilter">
            <label for="read">Read</label>

            <input type="radio" id="unread" value="unread" v-model="filter.byRead" @change="emitFilter">
            <label for="unread">Unread</label>
            

        </section>
            `
};