<template>
  <div>
    <!-- <h1>Hero Card</h1> -->
    <!-- {{ heroes }} -->
    <div class="row animate__animated animate__fadeIn">
      <div
        class="row bordere col-4 q-mb-md"
        v-for="(item, index) in heroes"
        :key="item.id"
      >
        <div class="col-4">
          <q-img :src="`/assets/${item.id}.jpg`" alt="" width="100%" height="" />
        </div>
        <div class="col-8 bordere">
          <h5 className="cart-title">{{ item.superhero }}</h5>
          <p className="cart-text">
            {{ item.alter_ego }}
          </p>
          <p className="text-muted">
            {{ item.characters }}
          </p>
          <p className="cart-text">
            <small className="text-muted">
              {{ item.first_appearance }}
            </small>
             <router-link :to="`/hero/${item.id}`" class="q-mx-md">Mas...</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.heroes, "fffffffddddddddd");
  },
  props: {
    heroes: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.bordere {
  border: red solid 1px;
}
</style>
