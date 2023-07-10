// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: "http://localhost:3000",
    dataOrders: [],
    dataItems: [],
    inputItem: {},
    loggedIn: localStorage.access_token

  }),
  actions: {

    handleError(error) {
      console.log('error>>>',error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.message}`
      })
    },
    addAmount(id) {
      const { value: amount } = Swal.fire({
        title: 'Enter the amount of item',
        input: 'number',
        // inputValue: inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
          console.log('test value>>', id);
          if (!value) {
            return 'You need to write something!'
          }
          else this.addOrder(id, value)
        }
      })
    },
    async addOrder(id, amount) {
      try {
       await axios({
          method: 'post',
          url: this.baseUrl + '/order',
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            ItemId: id,
            quantity: Number(amount)
          }
        })
     
        this.router.push('/')



      } catch (error) {
        this.handleError(error)
      }
    },
    async loginHandler(dataLogin) {
      try {

        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/login",
          data: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.loggedIn = true
        this.router.push('/')

      } catch (error) {
        this.handleError(error)
      }
    },
    logOut() {
      localStorage.clear()
      this.loggedIn = false

      this.router.push('/login')
    },
    async fetchOrders() {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/orders',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.dataOrders = data.map(a => {
          const totalPrice = this.formatCurrency(a.Item.price * a.quantity)
          console.log('data>>>', totalPrice);
          return { ...a, totalPrice }
        })


      } catch (error) {
        this.handleError(error)
      }
    },
    async fetchItems() {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/items',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.dataItems = data.map(a => {
          const formattedPrice = this.formatCurrency(a.price)
          return { ...a, formattedPrice }
        })
        // console.log('dataItems>>', data);


      } catch (error) {
        this.handleError(error)
      }
    }

    ,
    formatCurrency(value) {
      const formattedValue = value.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
      });

      return formattedValue.replace('IDR', 'Rp.');
    },



  },
  getters: {}
}

)