<template>
 
<Navigation :togglemnav="togglemnav"  @toggle-mobile="mobilenav"/>
<transition name="mymobilenav">
  <Mobile_nav  :togglemnav="togglemnav"  v-if="togglemnav"/>
  </transition>
<Hero/>
<Creative/>
<Innovative/>
<Gallery/>
<Testimonial/>
<CTA/>
<Contact/>
<MyFooter/>

</template>

<script>
  
import Contact from './components/Contact.vue';
import Creative from './components/Creative.vue';
import CTA from './components/CTA.vue';
import MyFooter from './components/Footer.vue';
import Gallery from './components/Gallery.vue';
import Hero from './components/Hero.vue';
import Innovative from './components/Innovative.vue';
import Mobile_nav from './components/Mobile_nav.vue';
import Navigation from './components/Navigation.vue'
import Testimonial from './components/Testimonial.vue';

  export default{
      name: 'Name',
      components: {
        Navigation,
        Hero,
        Creative,
        Innovative,
        Gallery,
        Testimonial,
        CTA,
        Contact,
        MyFooter,
        Mobile_nav
      },
      data(){
    return{
      togglemnav: true,
    }
  },
  methods: {
    mobilenav(){
      this.togglemnav = !this.togglemnav
    },
  }
       
  }

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.mymobilenav-enter-from{
      opacity: 0;
      transform: translateY(-60px);
    }
    .mymobilenav-enter-to{
      opacity: 1;
      transform: translateY(0);
    }

    .mymobilenav-leave-from{
      opacity: 1;
      transform: translateY(0);
    }
    .mymobilenav-leave-to{
      opacity: 0;
      transform: translateY(-60px);
    }

    .mymobilenav-enter-active, .mymobilenav-leave-active{
      transition: all 0.1s ease;
    }
</style>
