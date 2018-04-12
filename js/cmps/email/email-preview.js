export default {
  props: { email: { type: Object, required: true } },
  computed: {
    formattedDate() {
      return moment(this.email.sentAt).fromNow()
    }
  }
  ,
  template: `
<article class="media">
  <figure v-if="email.isRead" class="media-left">
    <p class="icon is-small">
      <!-- <i class="fas" :class="email.isRead? 'fa-envelope-open' : 'fa-envelope'" ></i> -->
      <i class="fas fa-envelope-open" ></i>
    </p>
  </figure>
  <figure v-else class="media-left">
    <p class="icon is-small">
      <!-- <i class="fas" :class="email.isRead? 'fa-envelope-open' : 'fa-envelope'" ></i> -->
      <i class="fas fa-envelope" ></i>
    </p>
  </figure>
  <div class="media-content">
    <div :class={bold:!email.isRead,danger:email.isRead} class="content">
      <p>
        {{email.subject}}
        <br>
        {{email.body.substring(0,50)}}...
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <!-- <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a> -->
      </div>
    </nav>
  </div>
  <div class="media-right">
  {{formattedDate}}
  <!-- moment(email.sentAt).format('LT') -->
  </div>
</article>
     <!-- <section>
        <h1>{{email.subject}}</h1>
        <p> read: {{email.isRead}} </p>
    </section> -->
    `
}





