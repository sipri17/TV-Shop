<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';



export default {
 
  computed: {
    ...mapWritableState(useCounterStore,['loggedIn'])
  },
  methods: {
    ...mapActions(useCounterStore, ['logOut']),

  },
  

}

</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-opacity-75" style="background-color: #ffe8d6;">
        <div class="container-fluid">
            <div style="width: 119px;">
                
            </div>
            <div class="collapse navbar-collapse justify-content-md-center" id="navbarSupportedContent">
                
                <h2 style="font-weight: 900; font-family: 'Times New Roman'; color:#090446;">TV Shop</h2>
              
                
            </div>
            <div style="width: 100px;">
                <button v-if="loggedIn" @click="logOut()" class="d-flex btn btn-danger"
                    type="submit">Log Out</button>
            </div>
            
        </div>
    </nav>
  <!-- Navbar -->
</template>