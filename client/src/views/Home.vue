<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'
import OrderCard from '../components/OrderCard.vue'


export default {
  components: {
    OrderCard
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchOrders']),
  },
  computed: {
    ...mapWritableState(useCounterStore, ['dataOrders'])
  },
  async created(){
    await this.fetchOrders()
  }
}
</script>

<template>
  <main>
    <h1 class="text-center my-3">Your Orders</h1>
    <router-link to="/AddOrder">
      <button type="button" class="btn btn-info px-3 me-2 my-3 mx-2">
        Add Order
      </button> </router-link>
    <div class="container">
      <div class="row">
        <OrderCard v-for="item,id in dataOrders" :key="id" :item="item" />
        <!-- <p>{{ dataOrders }}</p> -->

      </div>

    </div>


  </main>
</template>

<style></style>