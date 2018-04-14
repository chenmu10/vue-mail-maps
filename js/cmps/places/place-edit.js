export default {
    props: {
        place: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isTemp: false
        }
    },
    created() {
        if (!this.place.id) {
            this.isTemp=true;
        } 

    },

    computed: {

    },
    methods: {
        editPlace() {
            console.log('place to edit', this.place);
            this.$emit('edit', this.place);
        },
    },
    template: `
    <section class="place-edit box">

    <p class="title is-2">Editor</p>
    <p class="subtitle is-4">{{ place.address }}</p>
    <span class="is-size-7 has-text-grey">
    <i class="fas fa-map-marker"></i>
	{{ place.coords.lat }}, {{ place.coords.lng }}
    </span>
    <p><strong>is temp: </strong>{{ isTemp }}</p>
   

    <form @submit.prevent>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" v-model="place.name">
            </div>
        </div>

        <div class="field">
            <label class="label">Description</label>
            <div class="control">
                <textarea class="textarea" type="text" rows="5" cols="50" v-model="place.desc"></textarea>
            </div>
        </div>


        <div class="field">
            <label class="label">Tag</label>
            <div class="control">
                <input class="input" type="text" v-model="place.tag">
            </div>
        </div>

        <div class="field">
            <label class="label">photos</label>
            <ul>
                <li v-for="img in place.imgs">
                    {{ img }}
                </li>
            </ul>
           
            <div class="control">
           
                <input class="input" type="text">
             
                <button class="button is-outlined is-info">Add Url</button>
          
            </div>
        </div>

        <div class="block">
        <button class="button is-outlined is-success" v-if="isTemp" @click.stop="editPlace">Add to my places</button>
        <button class="button is-outlined is-info" v-else @click.stop="$emit('close')">Finish Editing</button>

        </div>
    

    </form>

</section>

    `
}