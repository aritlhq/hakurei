<template>
  <div class="bg-base-100">
    <div class="max-w-md mx-auto bg-base-100 min-h-screen">
      <main class="relative pb-24 px-4">
        <router-view />
      </main>
      <!--    <ButtomNav currentPath={Astro.url.pathname}/>-->
    </div>
  </div>
</template>