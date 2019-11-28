<template>
    <div class="container card w-50">
      <div class="form-row  mb-2 mt-2">
          <div class="col"> 
            <div class="input-group mb-3">
                <b-form-input type="text" v-model="custSearchString" aria-label="Search Customer" class="form-control" placeholder="Search string"></b-form-input>
                <div class="input-group-append mr-2">
                    <span class="input-group-text">Search</span>
                </div>
                <b-button variant="info" v-on:click="addCustomer">+</b-button>
            </div>              
          </div>
        </div>
        <div v-if="addCust" class="form-row mb-3">
            <UpdateCustomer v-on:add-cust="saveNewCust"/>
        </div>
        <div v-bind:key="cust.id" v-for="cust in this.customers">
            <CustListItem v-bind:cust="cust"/>
        </div>
    </div>
</template>

<script>

import CustListItem from "./CustListItem.vue";
import UpdateCustomer from "./UpdateCustomer";

export default {
    name: 'CustomersList',
    components: {
        CustListItem,
        UpdateCustomer
    },
    data() {
        return {
            baseUrl: 'localhost:4000/api',
            custSearchString: '',
            addCust: false,
            edit: true,
            customers: [
                {
                    id: 1,
                    salutaion: 'Mr',
                    gender: "Male",
                    firstName: 'Kamlesh',
                    surname: 'Patel',
                    dob: '01/01/2000',
                    address: {
                        street: '100 Twyford Avenue',
                        town: 'Ruislip',
                        county: 'Middlesex',
                        postcode: 'HA9 1EX'
                    },
                    email: 'kamleshp@hotmail.com',
                    password: ''
                },
                {
                    id: 2,
                    salutaion: 'Mr',
                    gender: "Male",                    
                    firstName: 'Tom',
                    surname: 'Pulman',
                    dob: '01/01/2001',
                    address: {
                        street: '102 Twyford Avenue',
                        town: 'Ruislip',
                        county: 'Middlesex',
                        postcode: 'HA9 1EX'
                    },
                    email: 'kamleshp@hotmail.com',
                    password: ''
                }       
            ]
        }
    },
    methods: {
        addCustomer() {
            this.addCust = !this.addCust;
            this.edit = false;
        },
        saveNewCust(cust){
            console.log(cust);
            //add to existing array.
            if (this.edit === false) {
                //Add
                fetch(`$(this.baseUrl)/customer`, {
                    method: 'post',
                    body: JSON.stringify(this.cust),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then( res => res.json())
                .then(data => {
                    this.cust = data;
                    //Clear the form
                    this.cust.title = '';
                    this.cust.firstName = '';

                    //Navigate to Customers List, and have it refreshed
                })
                .catch(err => console.log(err));
            } else {
                //Update
            }            
            this.customers = [...this.customers, cust];
            this.addCust = false;
        }
    }
}    
</script>

<style scoped>

</style>
