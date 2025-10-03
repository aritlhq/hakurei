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
        <!--        <img src="/images/jadwal_kuliah.png" alt="Jadwal Kuliah"/>-->
        <div class="mt-4">
          <p class="italic">Tanggal Mulai: 08 September - 10 Januari 2026</p>
          <p class="italic">Ruangan: VIKTOR, V.621</p>
        </div>
      </div>

      <div class="mt-8">
        <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table class="table">
            <thead>
            <tr>
              <th>No</th>
              <th>Hari</th>
              <th>Nama Mata Kuliah</th>
              <th>Dosen</th>
              <th>Jam</th>
            </tr>
            </thead>
            <tbody>
            {schedules.map((schedule, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{schedule.day}</td>
              <td class="font-semibold whitespace-nowrap">{schedule.courseName}</td>
              <td class="whitespace-nowrap">{schedule.lecturer}</td>
              <td class="whitespace-nowrap">{schedule.time}</td>
            </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>