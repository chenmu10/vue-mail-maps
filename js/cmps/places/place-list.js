

export default {
    props: { places: { type: Array, required: true } },
   
    methods: {
        emitSelected(idx) {
            console.log('h');
            this.$emit('selected', idx);
        }
    },
    template: `
            <section>

            <div class="places">
                    <h1 class="title is-2">place-list</h1>
                    <input type="text" name="search" placeholder="search">
                    <div class="places-list">
                      <ul>
                        <li v-for="(place, idx) in places" :key="place.id" >
                       <button @click="emitSelected(idx)">{{place.name}} </button> 
                       
                        </li>
                      </ul>
                    </div>
                </div>
            </section>
`,
   
}