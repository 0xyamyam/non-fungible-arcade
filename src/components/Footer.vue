<template>
  <footer class="py-24">
    <img class="mx-auto mb-6" src="../assets/NFA-Logo-Styled-Stacked.png" />
    <div class="py-4 text-center">
      <a href="#roadmap" title="" class="px-6 title uppercase text-xl leading-none">Roadmap</a>
      <a href="#faq" title="" class="px-6 title uppercase text-xl leading-none">FAQ</a>
      <a href="#play" title="" class="px-6 title uppercase text-xl leading-none">Play Now</a>
    </div>
    <div class="py-4 flex justify-center">
      <a href="https://discord.gg/ptFPKz6F" class="mx-4" title="Discord" target="_blank">
        <Discord fill="#DB38B9" />
      </a>
      <a href="https://twitter.com/NFArcade" class="mx-4" title="Twitter" target="_blank">
        <Twitter fill="#DB38B9" />
      </a>
    </div>
    <div class="py-4 text-center text-xs italic">Copyright ©{{ (new Date()).getFullYear() }} Non Fungible Arcade. All Rights Reserved.</div>
  </footer>
</template>

<script setup lang="ts">
import Twitter from './Twitter.vue'
import Discord from './Discord.vue'
</script>
