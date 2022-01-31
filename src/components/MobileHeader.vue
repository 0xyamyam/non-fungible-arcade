<template>
  <menu class="mobile-menu py-4 px-5 flex md:hidden flex-col" :class="{ 'fixed top-0 left-0 w-screen h-screen': open }">
    <div class="flex justify-between">
      <a href="#" class="w-7 h-7" @click.prevent="toggleMenu">
        <svg v-if="open" class="fill-white w-full h-full" viewBox="0 0 28 22" xmlns="http://www.w3.org/2000/svg">
          <rect x="3.98993" y="0.0418701" width="28" height="1.4" transform="rotate(45 3.98993 0.0418701)" />
          <rect x="3.60553" y="19.9464" width="28" height="1.4" transform="rotate(-45 3.60553 19.9464)" />
        </svg>
        <svg v-else class="fill-white w-full h-full" viewBox="0 0 28 22" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.976562" width="28" height="1.4" />
          <rect y="10.7766" width="28" height="1.4" />
          <rect y="20.5765" width="28" height="1.4" />
        </svg>
      </a>
      <img class="w-28" src="../assets/NFA-Logo-Styled-Stacked.png" />
      <div class="w-7" />
    </div>
    <div v-if="open" class="grow flex flex-col">
      <div class="grow">
        <ul>
          <li><a href="#roadmap" title="" class="block py-4 title uppercase text-xl leading-none" @click="toggleMenu">Roadmap</a></li>
          <li><a href="#faq" title="" class="block py-4 title uppercase text-xl leading-none" @click="toggleMenu">FAQ</a></li>
          <li><a href="#play" title="" class="block py-4 title uppercase text-xl leading-none" @click="toggleMenu">Play Now</a></li>
        </ul>
      </div>
      <div class="mt-auto mb-2">
        <div class="flex justify-center">
          <a href="#" class="my-6 mx-4" title="Discord">
            <Discord fill="#DB38B9" />
          </a>
          <a href="#" class="my-6 mx-4" title="Twitter">
            <Twitter fill="#DB38B9" />
          </a>
        </div>
        <div class="text-center text-xs italic">Copyright ©{{ (new Date()).getFullYear() }} Non Fungible Arcade. All Rights Reserved.</div>
      </div>
    </div>
  </menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Twitter from './Twitter.vue'
import Discord from './Discord.vue'

const open = ref(false)
const toggleMenu = () => {
  open.value = !open.value;
}
</script>

<style>
.mobile-menu {
  background: #150021;
}
</style>
