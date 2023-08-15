<template>
  <header class="navbar-light navbar-sticky header-static mt-3">

    <!-- Logo Navigasyon Başlangıcı -->
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Logo Başlangıç -->
        <router-link to="/" class="navbar-brand">
          <img class="project-logo navbar-brand-item light-mode-item" src="/bootstrap.svg" alt="logo">
        </router-link>
        <!-- Logo Bitişi -->

        <!-- Responsive navbar toggle -->
        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="text-body h6 d-none d-sm-inline-block">Menu</span>
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Main navbar Başlangıç -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
          <ul class="navbar-nav navbar-nav-scroll">

            <!-- Nav item 1 Anasayfa -->
            <li class="nav-item">
              <router-link to="/" class="nav-link" :class="{ active: isActive('/') }" id="homeMenu">User Log List</router-link>
            </li>

            <!-- Nav item 2 Rapor -->
            <li class="nav-item">
              <router-link to="/reports" class="nav-link" :class="{ active: isActive('/reports') }">Reports</router-link>
            </li>

          </ul>
        </div>
        <!-- Main navbar Bitiş -->


      </div>
    </nav>
    <!-- Logo Navigasyon Bitişi -->
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>
