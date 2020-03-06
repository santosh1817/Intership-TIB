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
            <router-link class="nav-link" to="/tours">Tours</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div style="width:1000px; margin:0 auto;">
      <span style="display:flex; justify-content:flex-end; width:33%; padding:0;">
        <h1>Add a tour</h1>
      </span>
      <br />
      <br />

      <div>
        <div>
          <div>
            <form v-on:submit.prevent="addItem2">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Tour Name:</label>
                  <input
                    v-on:click="this.addItem"
                    type="text"
                    class="form-control"
                    v-model="formData.name"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>NumberOfDays:</label>
                  <input type="text" class="form-control" v-model="formData.numberOfDays" />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label class="typo__label">Places Covered:</label>
                </div>
              </div>

              <div class="col-md-6">
                <div v-for="n in 1" :key="n">
                  <multiselect
                    v-model="selected"
                    :multiple="true"
                    :close-on-select="false"
                    :options="options"
                    placeholder="Multiselect places from the drop down "
                    :preselect-first="true"
                  ></multiselect>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>Itinerary:</label>
                </div>
                <input type="text" class="form-control" v-model="formData.Itinerary" />
              </div>

              <br />
              <div class="form-group">
                <span style="display:flex; justify-content:flex-end; width:30%; padding:0;">
                  <button class="btn btn-primary" style="margin-left:300">Create Itinerary</button>
                </span>
              </div>

              <div class="success">
                <h1>{{ this.message }}</h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
export default {
  name: "AddTour",
  components: {
    Multiselect
  },
  data: () => ({
    formData: {
      name: null,
      placescovered: [],
      numberOfDays: null,
      Itinerary: []
    },
    selected: null,
    options: [],
    message: null
  }),
  methods: {
    addItem() {
      axios.get("/tours").then(response => {
        console.log(response.data[0].places);
        this.options = response.data[0].places;
        //   this.formData.placescovered=this.options
      });
    },
    addItem2() {
      axios
        .post("/tours/add", this.formData)
        .then(response => {
          console.log(response);
          (this.formData.name = null),
            (this.formData.numberOfDays = null),
            (this.formData.placescovered = null),
            (this.formData.Itinerary = null),
            (this.options = [null]);
          setTimeout(() => (this.message = "Tour created successfully"), 1000);
          setTimeout(() => (this.message = ""), 1000);
          console.log(response);
          //          setTimeout(() => this.$router.push('/tours/add'), 1000);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="vue-multiselect/dist/vue-multiselect.min.css" scoped></style>
