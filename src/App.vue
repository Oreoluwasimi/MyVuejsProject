<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  
  <router-link to="/repositories"> My Repositories </router-link>
        <router-view />
   
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
}
</script>