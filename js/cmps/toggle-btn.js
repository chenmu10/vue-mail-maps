export default {
    props: ['value'],
    data(){
        return {isOn : this.value}
    },
    methods: {
        toggle() {
            console.log('CLICK');
            this.isOn = !this.isOn;
            this.$emit('input', this.isOn)
        }
    },
    template: `
        <label class="switch">
            <input type="checkbox" @click="toggle" :value="isOn"> 
            <div></div>
        </label>
    
    `
}