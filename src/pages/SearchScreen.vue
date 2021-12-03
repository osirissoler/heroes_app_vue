<template>
  <div>
    <h1>Search</h1>
    <hr />

    <div class="row">
      <div class="col-5">
        <h4>Buscar</h4>
        <hr />
        <form action="">
          <input type="text" v-model="searchText" />
          <button type="submit " @click="buscar">Buscar...</button>
        </form>
      </div>
      <div class="col-7">
        <HeroCard :heroes="heroes" />
      </div>
    </div>
  </div>
</template>
<script>
import HeroCard from "../components/hero/HeroCard.vue";
import { getHeroesByName } from "../selectores/getHeroesByName";
import queryString from 'query-string'
export default {
  components: {
    HeroCard,
  },
  data() {
    return {
      searchText: "",
      heroes: null,
      navigate:''
    };
  },
  created() {
       
    // this.heroesFilted = getHeroesByName('b')
     this.navigate = this.$route.query.q;
      this.heroes = getHeroesByName(this.navigate);
      this.searchText = this.navigate
     console.log(this.navigate,"this.navigate")
  },
  methods: {
    buscar(e) {
      e.preventDefault();
      this.heroes = getHeroesByName(this.searchText);
      this.$router.push({ path: 'search', query: { q:  `${this.searchText}` }})
    },
  },
};
</script>
