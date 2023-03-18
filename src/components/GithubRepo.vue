<template>
  <div class="repo-list">
    <div class ="header"> 
    <router-link to="/repositories"> <img class="logo" alt="Vue logo" src="../assets/logo.png"> </router-link>
      <h1>{{ title }}</h1>
    </div>
 
    <div class="body"> 
      <div class="table-container">
        <table class="table is-bordered is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>URL</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repo in paginatedRepositories" v-bind:key="repo.id">
              <td>{{ repo.id }}</td>
              <td>{{ repo.name }}</td>
             <router-link :to="{ path: `/repositories/${repo.name}`, params: true}">  <td class="a-link"> {{ repo.html_url }} </td> </router-link>
              <td> {{ repo.language }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    <div class="nav">
      <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>   
      <b class="pagenum"> {{currentPage}} of {{totalPages}} </b> 
    </div>
     
    </div>
  </div>  
    <div>
          <router-view />
    </div>
</template>



<script>



export default {
  name: "GithubRepo",


    props: {
    username: String
  },

  data() {
    return {
      title: 'My GitHub Repositories',
      repositories: [],
      currentPage: 1,
      itemsPerPage: 5
    }
  },

   computed: {
    paginatedRepositories() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.repositories.slice(startIndex, endIndex)
    },
    totalPages() {
      return Math.ceil(this.repositories.length / this.itemsPerPage)
    }
  },
  mounted() {
    this.fetchRepositories()
  },
  methods: {
    fetchRepositories() {
      fetch(`https://api.github.com/users/Oreoluwasimi/repos`)
        .then(response => response.json())
        .then(data => this.repositories = data)
        .catch(error => console.log(error.message))
    },
    prevPage() {
      this.currentPage -= 1
    },
    nextPage() {
      this.currentPage += 1
    }
  }
}
</script>

<style scoped>
.repo-list {
height: 100%;
width: 100%;
}

.header {
  background-color: black;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 20%;
}
.logo {
width: 150px;
height: 150px;
margin-top: 30px;
margin-left: 30px;
}

h1 {
color: white;
text-align: center;
padding: 15px;
margin: 0;
}

.body {
background-color: #40B883;
height: 80%;
}

.table-container {
width: 70%;
margin: auto;
height: 80%;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.2em;
  
}

thead th {
 font-size: 1.3em;
  margin-bottom: 0.5em;
  text-align: center;
  padding: 0.8em 1em;
  border-bottom: 2px solid #333;
}

tbody td {
  padding: 1em;
  border-bottom: .5px solid #C0C0C0;
  outline: none;
}

.a-link{
  color: black;
  cursor: pointer;
  text-decoration: underline;
  transition-duration: 0.4s;
}

.a-link:hover {
   color: #C0C0C0;
}


.nav {
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 1em;
  padding: 20px;
}

button{
  background-color: black;
  color: white;
  border: none;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  transition-duration: 0.4s;
}

button:hover {
  background-color: #35485E;
  color: #40B883;
}


</style>
