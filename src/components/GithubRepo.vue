<template>
  <div>
  <div> 
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ title }}</h1>
  </div>
 
   
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
              <td> {{ repo.html_url }}</td>
              <td> {{ repo.language }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    <div>
      <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
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

<style>
body {
  font: 15px/1.8 "Poppins", sans-serif !important;
}
.table td,
.table th {
  padding: 20px !important;
}
</style>


