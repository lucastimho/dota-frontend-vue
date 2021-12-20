<template>
  <div>
    <section id="contact">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Profile Page</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">Need to make changes to your account ID? You come to the right place.</p>
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
              <form v-on:submit.prevent="updateUser(user)" role="form" class="php-email-form">
                <ul>
                  <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
                <div class="form-group">
                  <input type="text" class="form-control" :placeholder="user.account_id" required />
                </div>
                <div class="text-center"><button type="submit" value="Submit">Update ID</button></div>
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
      user: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/user").then((response) => {
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function (user) {
      axios
        .patch("/users/" + user.id, user)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>
