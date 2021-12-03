<template>
    <div>
       <!-- <h1> Hero List</h1> -->
       <HeroCard :heroes='heroes' />
    </div>
</template>

<script>
import { getHeroesByPublisher } from '../../selectores/getHeroesByPublisher'
import HeroCard from './HeroCard.vue'

export default({
    name:" HeroList",
    components:{
        HeroCard
    },
  data() {
    return {
        heroes:[]
    };
  },
  props:{
      publisher: {
      type: String,
      required: true
    },
  },
  created(){
    this.heroes = getHeroesByPublisher(this.publisher)
    console.log(this.heroes,"ffffff", this.publisher)
  }
});
</script>