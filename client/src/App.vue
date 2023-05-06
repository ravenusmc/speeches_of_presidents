<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar.vue";

export default {
    components: {
    Navbar,
    // Footer,
  },
}
</script>

<style>
</style>
