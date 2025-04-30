<script setup>
import { RouterView } from 'vue-router'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import BookingModal from "./components/BookingModal.vue";

</script>

<style lang="scss">
@use "@/assets/css/style.scss" as *;
</style>

<template>
  <Header />

  <RouterView />

  <BookingModal />

  <Footer />
</template>
