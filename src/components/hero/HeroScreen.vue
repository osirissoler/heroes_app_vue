<template>
  <div>
    <!-- {{heroes}} -->
    <div class="row q-mt-sm">
      <div class="col-4">
        <q-img
          :src="`/assets/${heroes.id}.jpg`"
          alt=""
          width="100%"
          height=""
          class="animate__animated animate__fadeInLeft"
        />
      </div>
      <div class="col-8 animate__animated animate__fadeIn">
        <h3 className="">{{ heroes.superhero }}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {{ heroes.alter_ego }}
          </li>
          <li className="list-group-item">
            <b>publisher:</b>
            {{ heroes.publisher }}
          </li>
          <li className="list-group-item">
            <b>first appearance:</b>
            {{ heroes.first_appearance }}
          </li>
        </ul>
        <h5 className="q-mt-3">Character</h5>
        <p>
          {{ heroes.characters }}
        </p>

        <button className="btn btn-outline-info" @click="regresar">
          Regresar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getHeroById } from "../../selectores/getHeroById";
export default {
  data() {
    return {
      navigate: "",
      heroes: null,
    };
  },

  created() {
    this.navigate = this.$route.params.heroId;

    this.heroes = getHeroById(this.navigate);
    console.log(this.heroes);
  },
  methods:{
      regresar(){
          this.$router.go(-1)
      }
  }
};
</script>
