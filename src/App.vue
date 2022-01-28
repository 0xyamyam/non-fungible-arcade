<template>
  <header>
    <MobileHeader />
    <Header />
  </header>
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import MobileHeader from './components/MobileHeader.vue'
import Header from './components/Header.vue'

import Footer from './components/Footer.vue'
</script>
