<template>
    <div class="backdrop" v-if="togglemnav">
     
        <div class="container" v-if="togglemnav">
              <ul class="mobilenav text-prim-text">
                  <li>Home Page</li>
                  <li>About me</li> 
                  <li>My Services</li>
                  <li>Experiences</li>
              </ul>  
      </div>
    </div>
  </template>
  
  <script>
  export default {  
      name: 'Mobile_nav',
      props: ['togglemnav'],
      data(){
        return{
          backdropclose: true
        }
      },
      methods: {
        closemnav(){
          this.$emit('mobile-nav-close')
        },
        closebackdrop(){
          this.togglemnav = !this.togglemnav
        }
        }
      }
      
  </script>
  
  <style scoped>
          .mobilenav{
      display: none;
     }

   @media (max-width: 52.875em) {
  .container {
    display: flex;
    justify-content: center; 
    align-items: center;    
    position: fixed;        
    top: 30%;              
    left: 50%;            
    transform: translate(-50%, -50%); 
    background: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(10px);    
    z-index: 999999; 
    border-radius: 1em; 
    max-width: 600px; 
    width: 90%;         
    height: auto;
    padding: 1rem;     
  }

  .mobilenav {
    list-style: none;       
    text-align: center;
    display: block;
    z-index: 1000;
  }

  .mobilenav li {
    margin-top: 0.5em;
    font-weight: var(--fw-bold);
  }
  .backdrop{ 
    top: 0;
    position: fixed;
    background:     rgba(0,0,0,0.5);
    width: 100%; 
    height: 100%;
    z-index: 99999999;
    }



}
  
  
  
  
  </style>