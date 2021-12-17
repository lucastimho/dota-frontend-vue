<template>
  <div>
    <!-- ======= Header ======= -->
    <header id="header" class="d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo mr-auto"><a href="/">Dota 2</a></h1>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/games">Games</a></li>
            <li><a href="/players">Pro Players</a></li>
            <li v-if="!isLoggedIn()"><a href="/login">Login</a></li>
            <li v-if="isLoggedIn()"><a href="/following">Following</a></li>
            <li v-if="isLoggedIn()"><a href="/logout">Logout</a></li>
            <li v-if="isLoggedIn()"><a href="/profile">Profile</a></li>
            <!-- <li class="dropdown">
              <a href="#">
                <span>Drop Down</span>
                <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li> -->
            <li><a class="nav-link scrollto" href="/contact">Contact</a></li>
            <li v-if="!isLoggedIn()"><a class="nav-link scrollto" href="#">Welcome Guest</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->
    <router-view />
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="copyright">
              &copy; Copyright
              <strong>Imperial Theme</strong>
              . All Rights Reserved
            </div>
            <div class="credits">
              <!--
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Imperial
          -->
              Designed by
              <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<style></style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
