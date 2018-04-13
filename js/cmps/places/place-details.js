export default {
    props: {
        place: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {

        deletePlace() {
            console.log('place to delete:', this.place);
            this.$emit('delete', this.place)
        },
        editPlace() {
            console.log('place to edit', this.place);
            this.$emit('edit', this.place)
        },
    },
    template: `
    <section class="section">
    <div class="place-details">
        <h1 class="title is-2">place-details</h1>
        <form @submit.prevent>
            <div>  Name:
                  <input type="text" v-model="place.name" >
            </div>
             <div>Address:
                  <input type="text" v-model="place.address">
            </div>

            <div>
             lat,lng:
            <input type="text"  v-model="place.coords.lat">
            </div>
            <div>
             description:
             <textarea  rows="3"  v-model="place.desc"></textarea>
             </div>
             <div>
             tag:
            <input type="text"  v-model="place.tag">
            </div>
            <div>
             photos:
            <input type="text"  v-model="place.imgs[0]">
            </div>
            <button @click.stop="editPlace">Update</button>
            <button @click.stop="deletePlace">Delete</button>
            <button @click.stop="editPlace">Add to my places</button>
        </form>
    </div>
    </section>
    `
}