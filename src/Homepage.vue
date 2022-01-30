<template>
  <div class="landscape-bg mt-0 md:-mt-32">
    <div class="container mx-auto flex flex-col md:flex-row md:justify-center md:items-center md:pt-60">
      <div class="text-center md:text-left">
        <h1 class="title text-4xl md:text-7xl uppercase mt-4 mb-4">Reinventing the<br/>arcade experience</h1>
        <h2 class="title text-xl md:text-4xl uppercase text-[#DB38B9] mb-4">For the metaverse</h2>
        <h3 class="text-sm md:text-auto mb-8">The 80's are back for Web3.</h3>
        <a href="#" title="" class="inline-block mb-8 title uppercase text-xl leading-none text-[#DB38B9] border-2 border-[#DB38B9] rounded-full pt-3 pb-2 px-8" @click.prevent="toggleGame">Play Now</a>
      </div>
      <img src="./assets/arcade-system.png" class="w-72 md:w-auto mx-auto md:mx-0" />
      <template v-if="playing">
        <iframe src="./game/index.html" class="fixed top-0 left-0 w-screen h-screen z-10 bg-black/[.9]" />
        <a href="#" class="fixed top-0 right-0 w-7 h-7 mr-4 mt-4 z-20" @click.prevent="toggleGame">
          <svg class="fill-white w-full h-full" viewBox="0 0 28 22" xmlns="http://www.w3.org/2000/svg">
            <rect x="3.98993" y="0.0418701" width="28" height="1.4" transform="rotate(45 3.98993 0.0418701)" />
            <rect x="3.60553" y="19.9464" width="28" height="1.4" transform="rotate(-45 3.60553 19.9464)" />
          </svg>
        </a>
      </template>
    </div>
  </div>
  <div class="grid-bg py-96">home</div>
  <div class="gradient-bg py-96">home</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const playing = ref(false);

const toggleGame = () => {
  playing.value = !playing.value;
}
</script>
