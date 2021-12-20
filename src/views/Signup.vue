<template>
  <div class="signup">
    <section id="contact">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Sign Up</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">
              Welcome to the Dota 2 Database. It's a pleasure to have you joining us in unlocking all the features of
              this database.
              <br />
              Don't be shy now and make an account with us!
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
                    type="text"
                    v-model="newUserParams.account_id"
                    class="form-control"
                    placeholder="Your Account ID"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="email"
                    v-model="newUserParams.email"
                    class="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="password"
                    v-model="newUserParams.password"
                    class="form-control"
                    placeholder="Your Password"
                    required
                  />
                  <small
                    v-if="newUserParams.password.length > 0 && newUserParams.password.length < 6"
                    class="text-danger"
                  >
                    Password must be at least 6 characters
                  </small>
                  <small v-if="newUserParams.password.length > 20" class="text-danger">
                    Password must be less than 20 characters
                  </small>
                </div>
                <div class="form-group mt-3">
                  <input
                    input
                    type="password"
                    v-model="newUserParams.password_confirmation"
                    class="form-control"
                    placeholder="Please Confirm Password"
                    required
                  />
                  <small
                    v-if="
                      newUserParams.password_confirmation != newUserParams.password &&
                      newUserParams.password_confirmation.length > 0
                    "
                    class="text-danger"
                  >
                    Password does not match
                  </small>
                </div>
                <div class="text-center"><button type="submit" value="Submit">Sign Up</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: { name: "", email: "", password: "", password_confirmation: "" },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response;
          console.log(error.respone);
        });
    },
  },
};
</script>
