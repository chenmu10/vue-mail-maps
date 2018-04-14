import placeService from "../../services/places/place.service.js";


export default {
    props: { places: { type: Array, required: true } },
    data() {
        return {
            filter: null
        }
    },

    methods: {
        emitSelected(idx) {
            console.log('selected');
            this.$emit('selected', idx);
        }
        
        
    },
    template: `
            <section class="">

          
            <aside class="menu">
            <p class="title">
              My Places
            </p>
            <input type="text" placeholder="search" v-model="filter" @input="$emit('filtered', filter)">
            <ul class="menu-list">
              <li  v-for="(place, idx) in places" :key="place.id">
              <a @click="emitSelected(idx)"><span class="bold">{{place.name}}</span> {{place.address}} </a>
              </li>
            </ul>
           
          </aside>
            </section>
`,
components: {
    placeService
}
}

