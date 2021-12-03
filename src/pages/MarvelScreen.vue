<template>
  <div class="container">
    <h1>MarvelScreen</h1>
    <hr />
    <HeroList publisher="Marvel Comics" />
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
