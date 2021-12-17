<template>
  <div class="login">
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <input type="submit" value="Submit" />
    </form> -->
    <!-- ======= Contact Section ======= -->
    <section id="contact">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Login</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">
              Welcome to the Dota 2 Database. It's great to see you again. Please log in so you can use all the features
              of the database.
            </p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4">
            <div class="info">
              <div>
                <i class="bi bi-github"></i>
                <p>github.com/lucastimho</p>
              </div>

              <div>
                <i class="bi bi-linkedin"></i>
                <p>
                  linkedin.com/in/
                  <br />
                  lucas-t-ho
                </p>
              </div>

              <div>
                <i class="bi bi-envelope-plus-fill"></i>
                <p>lucas.t.ho.lh@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-md-8">
            <div class="form">
              <form v-on:submit.prevent="submit()" role="form" class="php-email-form">
                <ul>
                  <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
                <div class="form-group mt-3">
                  <input
                    type="email"
                    v-model="newSessionParams.email"
                    class="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="password"
                    v-model="newSessionParams.password"
                    class="form-control"
                    placeholder="Your Password"
                    required
                  />
                </div>
                <div class="text-center"><button type="submit" value="Submit">Login</button></div>
              </form>
              <div class="text-center"><button class="btn btn-primary" v-on:click="signUp()">Sign Up</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Section -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
    signUp: function () {
      this.$router.push("/signup");
    },
  },
};
</script>
