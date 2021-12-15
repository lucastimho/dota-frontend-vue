<template>
  <!-- <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Home</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/players">All Pro Players</a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn()">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item" v-if="isLoggedIn()">
              <a class="nav-link" href="/logout">Logout</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" v-if="isLoggedIn()" href="/following">Follow List</a></li>
                <li><a class="dropdown-item" v-if="isLoggedIn()" href="/profile">Profile Settings</a></li>
                <li><a class="dropdown-item" href="/about">About</a></li>
                <div v-if="!isLoggedIn()">
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="/signup">Sign Up</a></li>
                </div>
              </ul>
            </li>
            <li class="nav-item" v-if="!isLoggedIn()">
              <a class="nav-link disabled">Welcome Guest</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div> -->
  <!-- ======= Hero Section ======= -->
  <div>
    <section id="hero">
      <div class="hero-container">
        <div data-aos="fade-in">
          <h1>Welcome to the Dota 2 Database</h1>
          <h2>
            We create
            <span class="typed" data-typed-items="beautiful graphics, functional websites, working mobile apps"></span>
          </h2>
          <div class="actions">
            <a href="#about" class="btn-get-started">Get Started</a>
            <a href="#services" class="btn-services">Our Services</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->
    <!-- ======= Header ======= -->
    <header id="header" class="d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo mr-auto"><a href="/">Dota 2</a></h1>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="/">Home</a></li>
            <li><a class="nav-link scrollto" href="/about">About</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
            <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
            <li><a class="nav-link scrollto" href="#testimonials">Testimonials</a></li>
            <li><a class="nav-link scrollto" href="#team">Team</a></li>
            <li class="dropdown">
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
            </li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->
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
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
