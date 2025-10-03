<script setup>
import {onMounted} from 'vue';

onMounted(() => {
  const container = document.querySelector('.blur-reveal-container');

  if (container) {
    const children = container.children;

    const initialDelay = 0.5;
    const staggerDelay = 0.4;
    const baseDuration = 1;
    const durationIncrement = 0.5;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      child.style.animationDelay = `${initialDelay + (i * staggerDelay)}s`;

      const currentDuration = baseDuration + (i * durationIncrement);
      child.style.animationDuration = `${currentDuration}s`;
    }
  }
});
</script>

<template>
  <div class="pt-10">
    <div class="blur-reveal-container">
      <div class="py-4 text-center">
        <h1 class="italic font-bold">Selamat datang wahai</h1>
        <h2 class="text-5xl font-bold">Hamba Kampus</h2>
        <span class="italic">"Kuliah jangan lama-lama. Cepet selesai tepat waktu yaa"</span>
      </div>
      <div class="mt-10 flex flex-col gap-4">
        <div class="flex gap-4 items-center">
          <h2 class="text-left text-lg font-bold">Pintasan</h2>
          <div class="bg-black h-[2px] w-full"></div>
        </div>
        <a href="/jadwal-kuliah" class="block transition-transform duration-300 ease-in-out hover:scale-105">
          <!--          <JadwalKuliah/>--> JADWAL KULIAH
        </a>
        <a href="/tugas-kuliah" class="block transition-transform duration-300 ease-in-out hover:scale-105">
          <!--          <TugasKuliah/>--> TUGAS KULIAH
        </a>
      </div>
      <div class="mt-10 flex flex-col gap-4 text-left">
        <div class="flex gap-4 items-center">
          <h2 class="text-left text-lg font-bold">FAQ</h2>
          <div class="bg-black h-[2px] w-full"></div>
        </div>
        <Faq/>
      </div>
    </div>
  </div>
</template>


<style>
.blur-reveal-container > div {
  opacity: 0;
  filter: blur(5px);
  animation-name: reveal;
  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
  animation-fill-mode: forwards;
}

@keyframes reveal {
  from {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}
</style>

