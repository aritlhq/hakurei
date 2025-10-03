<script setup>
import {computed} from 'vue';
import {useRoute} from 'vue-router';

import HomeIcon from "../../public/icons/HomeIcon.vue";
import CollegeIcon from "../../public/icons/CollegeIcon.vue";
import CalendarIcon from "../../public/icons/CalendarIcon.vue";
import TaskIcon from "../../public/icons/TaskIcon.vue";
import ElearningIcon from "../../public/icons/ElearningIcon.vue";
import OfficeIcon from "../../public/icons/OfficeIcon.vue";
import OtherIcon from "../../public/icons/OtherIcon.vue";

const route = useRoute();

const sanitizedPath = computed(() => {
  const path = route.path;
  return path.length > 1 && path.endsWith('/')
      ? path.slice(0, -1)
      : path;
});

const isPerkuliahanActive = computed(() => {
  return ['/jadwal-kuliah', '/tugas-kuliah', '/elearning'].includes(sanitizedPath.value);
});
</script>

<template>
  <nav
      class="fixed bottom-0 lg:max-w-md lg:mx-auto max-w-screen left-0 rounded-t-3xl right-0 bg-base-100 border-t border-base-300 z-50">
    <div class="flex justify-around items-center">
      <!-- Home -->
      <router-link
          to="/"
          :class="[
          'flex flex-col items-center justify-center text-center p-3 flex-grow hover:bg-base-200 transition-colors duration-200 h-full',
          { 'text-[#ff743d]': sanitizedPath === '/' }
        ]"
      >
        <HomeIcon class="w-7 h-7"/>
        <span class="text-xs font-bold">Home</span>
      </router-link>

      <!-- College -->
      <div
          class="dropdown dropdown-top dropdown-center cursor-pointer flex-grow h-full flex justify-center items-center">
        <div
            tabindex="0"
            role="button"
            :class="[
            'flex flex-col items-center justify-center text-center p-3 hover:bg-base-200 transition-colors duration-200',
            { 'text-[#ff743d]': isPerkuliahanActive }
          ]"
        >
          <CollegeIcon class="w-7 h-7"/>
          <span class="text-xs font-medium">Perkuliahan</span>
        </div>

        <ul tabindex="0" class="dropdown-content menu p-1 space-y-1 shadow bg-white rounded-box w-52 mb-2 text-md">
          <li class="flex text-left">
            <router-link
                to="/jadwal-kuliah"
                :class="[
                'p-5 font-bold',
                { 'bg-neutral text-white': sanitizedPath === '/jadwal-kuliah' }
              ]"
            >
              <CalendarIcon class="w-6 h-6"/>
              Jadwal Kuliah
            </router-link>
          </li>
          <li>
            <router-link
                to="/tugas-kuliah"
                :class="[
                'p-5 font-bold',
                { 'bg-neutral text-white': sanitizedPath === '/tugas-kuliah' }
              ]"
            >
              <TaskIcon class="w-6 h-6"/>
              Tugas Kuliah
            </router-link>
          </li>
          <li>
            <router-link
                to="/elearning"
                :class="[
                'p-5 font-bold',
                { 'bg-neutral text-white': sanitizedPath === '/elearning' }
              ]"
            >
              <ElearningIcon class="w-6 h-6"/>
              E-Learning
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Administration -->
      <router-link
          to="/administrasi"
          :class="[
          'flex flex-col items-center justify-center text-center p-3 flex-grow hover:bg-base-200 transition-colors duration-200 h-full',
          { 'text-[#ff743d]': sanitizedPath === '/administrasi' }
        ]"
      >
        <OfficeIcon class="w-6 h-6"/>
        <span class="text-xs font-medium">Administrasi</span>
      </router-link>

      <!-- Others -->
      <router-link
          to="/lainnya"
          :class="[
          'flex flex-col items-center justify-center text-center p-3 flex-grow hover:bg-base-200 transition-colors duration-200 h-full',
          { 'text-[#ff743d]': sanitizedPath === '/lainnya' }
        ]"
      >
        <OtherIcon class="w-6 h-6"/>
        <span class="text-xs font-medium">Lainnya</span>
      </router-link>
    </div>
  </nav>
</template>