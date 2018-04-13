export default {
    props: {
        place: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            currPlace: null,
            isTemp: false
        }
    },
    created() {
        this.currPlace = this.place;
        if (!this.currPlace.id) {
            this.isTemp=true;
        } 

    },

    computed: {

    },
    methods: {

        deletePlace() {
            console.log('place to delete:', this.currPlace);
            this.$emit('delete', this.currPlace);
        },
        editPlace() {
            console.log('place to edit', this.currPlace);
            this.$emit('edit', this.currPlace);
        },
    },
    template: `
    <section class="section">
    <div class="place-details">
        <h1 class="title is-2">place-details</h1>
        <p><strong>is temp: </strong>{{ isTemp }}</p>
        <p><strong>crrPlace: </strong>{{ currPlace }}</p>
        <p><strong>props Place: </strong>{{ place }}</p>
        <form @submit.prevent>
            <div>  Name:
                  <input type="text" :value="currPlace.name" >
            </div>
             <div>Address:
                  <input type="text" :value="currPlace.address">
            </div>

            <div>
             lat,lng:
            <input type="text"  :value="currPlace.coords.lat">
            </div>
            <div>
             description:
             <textarea  rows="3"  :value="currPlace.desc"></textarea>
             </div>
             <div>
             tag:
            <input type="text"  :value="currPlace.tag">
            </div>
            <div>
             photos:
            <input type="text"  :value="currPlace.imgs[0]">
            </div>
            <button v-if="isTemp" @click.stop="editPlace">Add to my places</button>
            <div v-else>
            <button @click.stop="editPlace">Update</button>
            <button @click.stop="deletePlace">Delete</button>
            </div>
        </form>
    </div>
    </section>
    `
}