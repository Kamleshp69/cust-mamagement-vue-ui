<template>
  <div class="card mb-2">
    <div class="customer-item">
      <div class="row">
        <div class="col text-left">
          <h5>{{cust.salutaion}} {{cust.firstName}} {{cust.surname}}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col text-left">
          <p>DOB: {{cust.dob | moment("DD-MM-YYYY")}} </p>
        </div>
      </div>
      <div class="row">
        <div class="col text-left">
          <p>Address: {{cust.address.street}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "CustListItem",
    props: ["cust"]

}
</script>

<style scoped>
  .customer-item {
    background-color:mintcream;
  }
</style>
