export default {
    props: {email:{type: Object, required: true}},
   
   template:`
<article class="media">
  <figure class="media-left">
    <p  class="icon is-small">
      <i v-if="email.isRead" class="fas fa-envelope-open"></i>
      <i v-else="!email.isRead" class="fas fa-envelope"></i>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        {{email.subject}}
        <br>
        {{email.body}}
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
  {{email.sentAt}}
  </div>
</article>
     <!-- <section>
        <h1>{{email.subject}}</h1>
        <p> read: {{email.isRead}} </p>
    </section> -->
    `
}





