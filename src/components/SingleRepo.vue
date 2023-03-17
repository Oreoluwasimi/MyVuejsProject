

<template>
  <div>
    <h1>{{ repository.name }}</h1>
    <p>{{ repository.description }}</p>
    <a :href="repository.html_url">{{ repository.html_url }}</a>
  </div>
</template>

<script>
export default {
  name: 'SingleRepo',
  props: {
    id: Number
  },
  data() {
    return {
      repository: {}
    }
  },
  mounted() {
    this.fetchRepository()
  },
  methods: {
    fetchRepository() {
      fetch(`https://api.github.com/repositories/:id`)
        .then(response => response.json())
        .then(data => this.repository = data)
        .catch(error => console.error(error))
    }
  }
}
</script>


