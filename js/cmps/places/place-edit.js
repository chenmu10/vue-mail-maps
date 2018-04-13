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
    <section class="place-details box">
   
        <h1 class="title is-2">place-edit</h1>
        <p><strong>is temp: </strong>{{ isTemp }}</p>
      
        <form @submit.prevent>

        <div>
        {{ place.address }}
      </div>

        <div>
        <i class="fas fa-map-marker"></i>
        {{  place.coords.lat }}, {{  place.coords.lng }}
        </div>

        <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input  type="text" v-model="place.name">
        </div>
      </div>
      
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
        <textarea  type="text" rows="5" cols="50" v-model="place.desc"></textarea>
        </div>
      </div>

     
      <div class="field">
      <label class="label">Tag</label>
      <div class="control">
        <input type="text" v-model="place.tag">
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
    <input type="text"> 
    <button  class="button is-outlined">Add Url</button>
    </div>
  </div>
            
         


           <button class="button is-outlined" v-if="isTemp" @click.stop="editPlace">Add to my places</button>
           <button class="button is-outlined" v-else @click.stop="$emit('close')">Finish Editing</button>
           
        </form>

    </section>
    `
}