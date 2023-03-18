

<template>
  <div class="repo"> 
    <div class ="header"> 
      <router-link to="/repositories"> <img class="logo" alt="Vue logo" src="../assets/logo.png"> </router-link>
       <router-link to="/repositories"> <p class="repos"> Repositories </p> </router-link>
        <h1 class="title">{{ title }}</h1>
    </div>  

    <div class="body">
      <div class="body-content">
        <h1>{{ repository.name }}</h1>
        <p>{{ repository.description }}</p>
        <a class="a-link" :href="repository.html_url">{{ repository.html_url }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleRepo',
  props: {
    name: String
  },
  data() {
    return {
    title: 'A Single Repo',
      repository: {}
    }
  },
  mounted() {
    this.fetchRepository()
  },
  methods: {
    fetchRepository() {
      const url = `https://api.github.com/repos/Oreoluwasimi/${this.$props.name}`
      fetch(url)
        .then(response => response.json())
        .then(data => {this.repository = data})
        .catch(error => console.log(error.message))
    }
  }
}
</script>

<style scoped>
.repo {
height: 100%;
width: 100%;
}

.header {
  background-color: black;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 20%;
  width: 100%;
}

.header h1 {
text-align: center;
color: #C0C0C0;
margin: 0;
padding: 10px;
}

.repos {
text-align: right;
margin: 0;
margin-right: 25px;
color: #40B883;
text-decoration: underline;
}

.repos:hover {
color: #C0C0C0;
transition-duration: 0.3s;
}

.logo {
width: 150px;
height: 150px;
margin-top: 30px;
margin-left: 30px;
}

.body {
background-color: #40B883;
color: #35485E;
height: 80%;
width: 100%;
margin: 0;
padding: 0;
border: 1px solid;
}

.body-content {
color: black;
height: 50%;
width: 50%;
margin: auto;
margin-top: 120px;
margin-bottom: 220px;
text-align: center;

}

.a-link{
  color: #35485E;
  cursor: pointer;
  text-decoration: none;
  transition-duration: 0.4s;
  margin-top: 20px;
}

.a-link:hover {
   color: #C0C0C0;
}

</style>


