<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'



export default {
    props: ["item"],
    methods: {
        ...mapActions(useCounterStore, ['addAmount']),
              
    },
   
}
</script>

<template>
    <div class="card mx-3 my-3" style="width: 18rem;">
        <div class="flex-column my-2 justify-content-end">
            <div>
                <img :src="item.imageUrl" class="card-img-top" style="height: 300px; object-fit:cover;"
                    :alt="'image of ' + item.imageUrl" />
                <div class="card-body text-dark">
                    <h5 class="card-title">{{ }}</h5>
                </div>
            </div>
            <ul class="list-group list-group-light list-group-small">
                <li class="list-group-item px-4"> Price : {{ item.formattedPrice }} </li>
                <li class="list-group-item px-4"> {{ }} </li>
            </ul>
            <button @click="()=>addAmount(item.id)" class="btn btn-primary my-1 btn-success">Add to cart</button>

        </div>
    </div>
</template>

<style></style>