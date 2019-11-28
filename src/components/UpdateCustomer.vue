<template>
  <div>
    <b-form @submit.prevent="saveCust">
        <b-card class="mx-auto">
            <div class="form-row">  
                <h5>Personal details</h5>
            </div>
            <div class="form-row mb-3">
                <div class="col">
                    <b-form-select v-model="cust.salutation">
                        <template v-slot:first>
                            <option :value="null" disabled>Title</option>
                        </template> 
                        <option value="Mr">Mr</option> 
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>   
                    </b-form-select>
                </div>
                <div class="col">
                    <b-form-select v-model="cust.gender">
                        <template v-slot:first>
                            <option :value="null" disabled>Gender</option>
                        </template>
                        <option value="Male">Male</option> 
                        <option value="Female">Female</option>            
                    </b-form-select>
                </div>
                <div class="col">
                    <b-form-input v-model="cust.dob" :displayFormat="'DD-MM-YYYY'" type="date"></b-form-input>
                </div>
            </div>    
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Your name</span>
                </div>
                <b-form-input type="text" v-model="cust.firstName" aria-label="First name" class="form-control"></b-form-input>
                <b-form-input type="text" v-model="cust.surname" aria-label="Surname" class="form-control"></b-form-input>
            </div>

            <div class="form-row">
                <h5>Address</h5>      
            </div>
            <div class="form-row mb-3">
                <div class="col">
                    <b-form-input type="text" v-model="cust.address.street" class="w-100"></b-form-input> 
                </div>         
            </div>        
            <div class="form-row mb-3">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Postcode</span>
                        </div>
                        <b-form-input type="text" v-model="cust.postcode" aria-label="Postcode" class="form-control"></b-form-input>
                    </div>
                </div>
                <div class="col">
                    <b-button type="button" variant="info">Look up address</b-button>
                </div> 
                <div class="col">
                    <b-button type="button" variant="outline-info">Enter address manually --></b-button>               
                </div>  
            </div>

            <div class="form-row mb-3">
                <div class="input-group col">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Email</span>
                    </div>        
                    <b-form-input type="email" v-model="cust.email" ></b-form-input>
                </div>    
                <div class="input-group col">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Password</span>
                    </div> 
                    <b-form-input type="password" v-model="cust.password" ></b-form-input>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <b-button @click="saveCust()" variant="info">Save</b-button>
                </div>
            </div>
        </b-card> 
    </b-form> 
  </div>
</template>

<script>

    export default {
        name: 'UpdateCustomer',
        data() {
            return {
                cust: {
                    salutation: null,
                    firstName: null,
                    surname: null,
                    gender: null,
                    dob: null,
                    email: null,
                    password: null,
                    address: {
                        street: '',
                        town: '',
                        county: '',
                        postcode: ''                        
                    }
                },
                
            }
        },
        methods: {
            saveCust() {
                //e.preventDefault(); // This prevents default submit form
                this.$emit('add-cust', this.cust);
                //Clear the form
                //this.cust.title = '';
                //this.cust.firstName = '';
                //this.cust.surname = '';
            }
        }
    }
</script>

<style>

.address {
    width: 100%;
    margin-bottom: 20px;
}
</style>
