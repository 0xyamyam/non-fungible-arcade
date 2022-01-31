<template>
  <menu class="container mx-auto py-4 hidden md:block">
    <div class="flex justify-start items-center">
      <img class="w-64" src="../assets/Logo.png" />
      <a href="#roadmap" title="" class="ml-auto block mx-4 title uppercase text-xl leading-none">Roadmap</a>
      <a href="#faq" title="" class="block mx-4 title uppercase text-xl leading-none">FAQ</a>
      <a href="#play" title="" class="block mx-4 title uppercase text-xl leading-none text-[#DB38B9] border-2 border-[#DB38B9] rounded-full pt-3 pb-2 px-8">Play Now</a>
      <a href="https://discord.gg/ptFPKz6F" class="mx-3" title="Discord" target="_blank">
        <Discord class="fill-white" />
      </a>
      <a href="https://twitter.com/NFArcade" class="mx-3" title="Twitter" target="_blank">
        <Twitter class="fill-white" />
      </a>
    </div>
  </menu>
</template>

<script setup lang="ts">
import Twitter from './Twitter.vue'
import Discord from './Discord.vue'
</script>
