
export default {
    template: `
    <section>
      <header>
               
      <nav class="navbar is-light">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
      
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png">
        <h4 class="title is-4 has-text-primary"> AppSus</h4>
       
        </router-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
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
                <router-link to="/email" class="is-danger button is-medium">
                  <span class="icon">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span>
                 MyEmail
                  </span>
                </router-link>
              </p>
              <p class="control">
                <router-link to="/places" class="button is-info is-medium">
                  <span class="icon">
                    <i class="far fa-map"></i>
                  </span>
                  <span>MyPlaces</span>
                </router-link>
              </p>
              <p class="control">
              <router-link to="/notes" class="button is-success is-medium">
                <span class="icon">
                <i class="fas fa-pencil-alt"></i>
                </span>
                <span>MyNotes</span>
              </router-link>
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