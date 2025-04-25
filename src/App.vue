<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss">
@use "@/assets/css/style.scss" as *;
</style>

<template>

  <Header />

  <RouterView />

  <Footer />
</template>
