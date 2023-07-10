<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'
import ItemCard from '../components/ItemCard.vue'


export default {
  components: {
    ItemCard
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchItems']),
  },
  computed: {
    ...mapWritableState(useCounterStore, ['dataItems'])
  },
  async created(){
    await this.fetchItems()
    console.log("dataItems",this.dataItems);
  }
}
</script>

<template>
  <main>
    <h1 class="text-center my-3">Add Order</h1>
   
    <div class="container">
      <div class="row">
        <ItemCard v-for="item,id in dataItems" :key="id" :item="item" />
        <!-- <p>{{ dataItems }}</p> -->

      </div>

    </div>


  </main>
</template>

<style></style>