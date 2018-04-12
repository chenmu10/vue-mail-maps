export default {
    props: {place:{type: Object, required: true}},
    data(){
        return {
           
        }
    },
    computed: {
        
    },
    methods: {
       
        deletePlace() {
            console.log(this.place);
            this.$emit('deletePlace', this.place)
        },
        editPlace() {
            console.log(this.place);
            this.$emit('addPlace', this.place)
        },
    },
    template: `
    <section class="section">
    <div class="place-details">
        <h1 class="title is-2">place-details</h1>
        <form @submit.prevent>
            name:
            <input type="text" :value="place.name"> lat,lng:
            <input type="text" disabled> description:
            <input type="text"> tag:
            <input type="text"> photos:
            <input type="text">
            <button type="submit" @click="editPlace">Update</button>
            <button @click="deletePlace">Delete</button>
            <button @click="editPlace">Add to my places</button>
        </form>
    </div>
    </section>
    `
    }