<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';



export default{
    data(){
        return{
            dataLogin : {
                email : "",
                password : ""
            }
        }
    },
    methods:{
        ...mapActions(useCounterStore, ['loginHandler'])
    }

}
</script>

<template>
   <div class="d-flex justify-content-center">
        <div class="container" style="width: 25rem;">
            <h2 class="text-center">Login</h2>
            <form @submit.prevent="loginHandler(dataLogin)">
                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input v-model="dataLogin.email" type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input v-model="dataLogin.password" type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>

                <!-- 2 column grid layout for inline styling -->
                <div class="form-outline mb-4">

                    <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
                  
                </div>

            </form>
        </div>

    </div>
</template>