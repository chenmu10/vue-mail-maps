

export default {
    // props: { places: { type: Array, required: true } },
    data() {
        return {
            places: [{ name: 'place1' }, { name: 'place2' }, { name: 'place3' }]
        }
    },
    methods: {
        emitSelected(idx) {
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
                        <li v-for="(place, idx) in places" :key="place.id">
                           <p>{{place.name}}</p>
                        <!-- <button :place="place" @click.native="emitSelected(idx)" >  </button> -->
                        </li>
                      </ul>
                    </div>
                </div>
            </section>
`,
   
}