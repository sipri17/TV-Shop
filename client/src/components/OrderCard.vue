<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'



export default {
    props: ["item"],
    computed: {
        ...mapActions(useCounterStore, ['formatCurrency'])
    }
}
</script>

<template>
    <div class="card mx-3 my-3" style="width: 18rem;">
        <div class="flex-column my-2 justify-content-end">
            <div>
                <img :src="item.Item.imageUrl" class="card-img-top" style="height: 300px; object-fit:cover;"
                    :alt="'image of ' + item.Item.imageUrl" />
                <div class="card-body text-dark">
                    <h5 class="card-title">{{ item.Item.item_name }}</h5>
                </div>
            </div>
            <ul class="list-group list-group-light list-group-small">
                <li class="list-group-item px-4"> Quantity : {{ item.quantity }} unit</li>
                <li class="list-group-item px-4"> {{ item.totalPrice }} </li>
            </ul>

        </div>
    </div>
</template>

<style></style>