Vue.component('button-counterstt', {

    data: function () {
      
      return {
        alfe:"aze",
        totoruels:[
        {name: 'What is Vue.js?',time:'1:00 h',vues:'  1358 ',laiks:'507',link:'https://www.youtube.com/watch?v=jXzox9QmzMM&list=PL1FWK-sgJ9eljz7Tm5SSUcCt5sxmwoFlC&index=65' ,webpig:'https://github.com/RAM6IOS' },
        {name: 'The Vue Instance', time:'1:30 h',vues:'  1358 ',laiks:'507' ,link:'https://vueschool.io/lessons/understanding-the-vuejs-lifecycle-hooks?friend=vuejs',webpig:'https://github.com/RAM6IOS'},
        {name: 'Template Syntax', time:'2:00 h',vues:' 1358 ',laiks:'507' ,link:'https://www.youtube.com/watch?v=Ozv-jeGBQmA&list=PL1FWK-sgJ9eljz7Tm5SSUcCt5sxmwoFlC&index=13',webpig:'https://github.com/RAM6IOS'},
    
    ]
        

        

       
       
      }
    },
    methods: {
       
    },
    computed: {
           
    },

//mixins:[bad],
    template: ` <div>
    <div class="row">
    <div v-for='totoruel in totoruels'>
    
       <div class="col-lg-4">   
    <div class="card  shadow-lg p-3 "style="width: 21rem;" >
        <img src="https://blog.elao.com/images/posts/thumbnails/vuejs.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{totoruel.name}}</h5>
          <p class="card-text">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
             </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class='fas fa-clock'>{{totoruel.time}}</i> </li>
          <li class="list-group-item"><i class='fas fa-eye'>{{totoruel.vues}}</i></li>
          <li class="list-group-item"><i class='far fa-thumbs-up'>{{totoruel.laiks}}</i></li>
        </ul>
        <div class="card-body">
          <a v-bind:href="totoruel.link" class="card-link"><i class='fab fa-youtube'> youtube </i> </a>
          <a v-bind:href="totoruel.webpig" class="card-link"><i class='fab fa-github'>github</i> </a>
        </div>
      </div> 
    </div> 
    </div>
    </div>
    
    
    </div>
    
    `
  })

var app = new Vue({
  
    el: '#appl-s',
    data:function(){
      return{
          nam:'ramzi'
      
        
       

      }

    },
    
    
    
  })
 