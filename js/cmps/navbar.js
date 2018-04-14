
export default {
    template: `
    <section>
      <header>
               
      <nav class="navbar is-light">
      <div class="navbar-brand">
        <a class="navbar-item">
      
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png">
        <h4 class="title is-4 has-text-primary"> <router-link to="/">AppSus</router-link></h4>
       
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span>Home</span>
          <span>About</span>
          <span></span>
        </div>
      </div>
    
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
         
        
          <router-link class="navbar-item" to="/about">About</router-link>
       
           
          </div>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <button class="is-danger button is-medium">
                  <span class="icon">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span>
                  <router-link to="/email">MyEmail</router-link>
                  </span>
                </button>
              </p>
              <p class="control">
                <button class="button is-info is-medium">
                  <span class="icon">
                    <i class="far fa-map"></i>
                  </span>
                  <span><router-link to="/places">MyPlaces</router-link></span>
                </button>
              </p>
              <p class="control">
              <button class="button is-warning is-medium">
                <span class="icon">
                <i class="fas fa-pencil-alt"></i>
                </span>
                <span><router-link to="/notes">MyNotes</router-link></span>
              </button>
            </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
            </header>
          
    </section>
    `
}