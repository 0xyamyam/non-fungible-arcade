<template>
  <div id="play" class="landscape-bg mt-0 md:-mt-32">
    <div class="container mx-auto text-center pt-44 pb-72 md:pt-60 md:pb-96">
      <h1 class="title text-4xl md:text-9xl uppercase mt-4 mb-4">Reinventing the<br/>arcade experience</h1>
      <h2 class="title text-xl md:text-4xl uppercase text-[#DB38B9] mb-4">For the metaverse</h2>
      <a href="#" title="" class="inline-block mb-8 title uppercase text-xl leading-none bg-[#DB38B9] border-2 border-[#DB38B9] rounded-full pt-3 pb-2 px-8 text-white" @click.prevent="toggleGame">Play Now</a>
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
  <div class="gradient-bg">
    <div class="container mx-auto py-24 md:py-44">
      <div class="text-center text-white mb-16">
        <h2 class="title text-4xl md:text-6xl uppercase mt-4 mb-4">The web3 arcade is here</h2>
        <h3 class="title text-xl md:text-2xl uppercase">Play fun arcade games & earn tickets</h3>
      </div>
      <div class="flex flex-col items-center md:flex-row md:justify-center">
        <div class="text-center mb-6 mx-16">
          <img src="./assets/Arcade-Icon.png" class="mx-auto" />
          <h5 class="title uppercase text-2xl mt-3">Play Games</h5>
        </div>
        <div class="text-center mb-6 mx-16">
          <img src="./assets/Ticket-Icon.png" class="mx-auto" />
          <h5 class="title uppercase text-2xl mt-3">Earn Tickets</h5>
        </div>
        <div class="text-center mb-6 mx-16">
          <img src="./assets/Prize-Icon.png" class="mx-auto" />
          <h5 class="title uppercase text-2xl mt-3">Redeem for NFTs</h5>
        </div>
      </div>
      <h4 class="text-sm md:text-lg mt-10 text-center">Non Fungible Arcade is a play & earn economy focused on FUN FIRST, supported by a powerful system that rewards talented players & snazzy developers.</h4>
    </div>
  </div>
  <div class="gradient-bg relative">
    <div class="container mx-auto py-24 md:py-44">
      <div class="text-center text-white mb-36 md:mb-96">
        <h2 class="title text-4xl md:text-6xl uppercase mt-4 mb-4">Where players come to play</h2>
        <h3 class="title text-xl md:text-2xl uppercase">Have fun, win tickets, & cash them in for NFTs</h3>
      </div>
    </div>
    <div class="absolute inset-x-0 bottom-0 px-10 md:px-0">
      <img src="./assets/Prize-Wall.png" class="mx-auto" />
    </div>
  </div>
  <div class="grid-bg">
    <div class="container mx-auto flex flex-col md:flex-row md:justify-center md:items-center py-32 md:py-60">
      <div class="text-center md:text-left md:mr-10">
        <h1 class="title text-4xl md:text-6xl uppercase mt-4 mb-4">Play & earn meets<br/>dev & earn</h1>
        <h2 class="title text-xl md:text-2xl uppercase mb-4">The better you play, the better your earnings</h2>
        <ol class="text-sm md:text-auto mt-8 list-decimal list-inside">
          <li class="mb-3">Submit your game</li>
          <li class="mb-3">We host it</li>
          <li class="mb-3">You get paid</li>
        </ol>
      </div>
      <img src="./assets/Game.png" class="w-72 md:w-auto mx-auto md:mx-0 md:ml-10 my-6 md:my-0" />
    </div>
  </div>
  <div id="roadmap" class="grid-bg py-32">
    <div class="container mx-auto flex flex-col md:flex-row md:justify-center md:items-center py-32 md:py-60">
      <div class="text-center md:text-left md:mr-10">
        <h1 class="title text-4xl md:text-6xl uppercase mt-4 mb-4">Roadmap</h1>
        <h2 class="title text-xl md:text-2xl uppercase mb-4">How we are bringing the arcade to the metaverse</h2>
      </div>
    </div>
  </div>
  <div id="faq" class="gradient-bg">
    <div class="container mx-auto py-24 px-6 md:px-0">
      <div class="text-center text-white mb-16">
        <h2 class="title text-4xl md:text-6xl uppercase mt-4 mb-4">FAQ</h2>
        <h3 class="title text-xl md:text-2xl uppercase">Play fun arcade games & earn tickets</h3>
      </div>
      <Faq class="mb-6">
        <template #header><h5>How does Non Fungible Arcade work?</h5></template>
        <p>The easiest way to explain the Non Fungible Arcade is that it operates the same way a traditional arcade works, but in the metaverse! Arcade machines take tokens, then you earn tickets, and you use tickets to claim limited NFTs from the prize counter!</p>
      </Faq>
      <Faq class="mb-6">
        <template #header><h5>What's play & earn?</h5></template>
        <p>Play & earn is an ecosystem that focuses on having fun playing & earning while doing so. Players inside of Non Fungible Arcade will earn tickets that they can use to claim limited NFTs from the prize counter that have…utility.</p>
      </Faq>
      <Faq class="mb-6">
        <template #header><h5>What's dev & earn?</h5></template>
        <p>Dev & earn is a new concept that allows game developers to submit a game to us, we host it in the arcade, and pay the developer 100% of their earnings from their game.</p>
      </Faq>
      <Faq>
        <template #header><h5>How do i submit my game?</h5></template>
        <p>If you are a game developer who would like to submit a project to be placed in the arcade, please follow these steps! :)</p>
        <ol class="text-sm md:text-auto mt-8 list-decimal list-inside">
          <li class="mb-3">Fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmAnDYFZrd-N-jVM5mmzON0gvYqzhf2pJH_9a6cBMpWNt5rQ/viewform" target="_blank" class="text-[#DB38B9]">this form</a></li>
          <li class="mb-3">Wait for the green light</li>
          <li class="mb-3">We launch your game</li>
          <li>You site back & get paid</li>
        </ol>
      </Faq>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Faq from './components/Faq.vue'

const playing = ref(false);

const toggleGame = () => {
  playing.value = !playing.value;
}
</script>
