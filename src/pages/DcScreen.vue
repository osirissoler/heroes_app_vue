<template>
  <div class="container">
    <h1>DC</h1>
    <hr />
    <HeroList publisher="DC Comics" />
  </div>
</template>

<script>
import HeroList from '../components/hero/HeroList.vue'
export default({
    name:"MarvelScreen",
    components:{
        HeroList
    },


});
</script>
