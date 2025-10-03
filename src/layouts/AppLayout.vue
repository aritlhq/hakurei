<script setup>
import BottomNavigation from "../components/BottomNavigation.vue";
</script>

<template>
  <div class="bg-base-100">
    <div class="max-w-md mx-auto bg-base-100 min-h-screen relative">
      <main class="relative pb-24 px-4">
        <router-view/>
      </main>
      <BottomNavigation/>
    </div>
  </div>
</template>