<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" width="30" height="30" alt />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon"></span>
        aria-label="Toggle navigation"
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/tours/add">Add Tour</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/tours/history">Tour History</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div style="width:1000px; margin:0 auto;">
      <span style="display:flex; justify-content:flex-end; width:33%; padding:0;"></span>
      <br />
      <br />

      <div class="container">
        <h1>Listing Tours:</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Tourname</th>
              <th scope="col">Number Of Days</th>
              <th scope="col">Places Covered</th>
              <th scope="col">Itinerary</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tour in tours" v-bind:key="tour._id">
              <th scope="row">{{tour.name}}</th>
              <!--          <td>{{user.username}}</td> -->
              <td>{{tour.numberOfDays}}</td>
              <!--          <td>{{user.password}}</td> -->
              <td>{{tour.places}}</td>
              <td>{{tour.itinerary}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Tours",
  data: () => ({
    tours: null
  }),
  created: function() {
    axios.get("/tours").then(res => {
      this.tours = res.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="vue-multiselect/dist/vue-multiselect.min.css" scoped></style>
