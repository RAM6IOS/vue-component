<template>
    <div>
       <h1>{{title}}</h1> 
    </div>
</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/HelloWorld.vue';
import fromHder from './components/fromHder.vue';

//import Ninjas from './components/Ninjas.vue';
export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
         'app-from':fromHder,

        //'app-ninjas': Ninjas
    },
    data () {
        return {
          ninjas: [
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ],
          title: 'Vue Wizards',
          namz:"21001",
          ful:'31545'
        }
    },
    methods: {
     
      },
     
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>