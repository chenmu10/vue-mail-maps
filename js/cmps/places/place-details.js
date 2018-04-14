export default {
    props: {
        place: {
            type: Object,
            required: true
        }
    },

    computed: {

    },
    methods: {
        deletePlace() {
            console.log('place to delete:', this.place);
            this.$emit('delete', this.place);
        },
        editPlace() {
            console.log('place to edit', this.place);
            this.$emit('edit', this.place);
        },
    },
    template: `
    <section class="place-details box">
	<p class="title is-2">{{ place.name }}  <span class="tag is-info">
		{{ place.tag }}
	</span></p> 
    <p class="subtitle is-4">{{ place.address }}</p>
    
    <span class="is-size-7 has-text-grey">
    <i class="fas fa-map-marker"></i>
	{{ place.coords.lat }}, {{ place.coords.lng }}
    </span>
	
	
	
	<div class="block">
		<p class="subtitle is-5"> 
			{{place.desc }}
		</p>
    </div>
    

    
	<span v-for="img in place.imgs"  :key="place.imgs.id">
		<img :src="img"/>
	</span>
	
	<div class="block">
		
		<div class="buttons is-centered">
			<button  class="button is-outlined" @click.stop="$emit('goToEdit',this.place)">Edit</button>
			<button class="button is-danger is-outlined" @click.stop="deletePlace">Delete</button>
			
		</div>
		
	</div>
	
</div>


</section>
    `
}

