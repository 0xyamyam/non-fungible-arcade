<template>
  <section class="border-[#DB38B9] border-2 rounded-lg">
    <header class="title uppercase text-2xl p-6 cursor-pointer flex items-center" @click.prevent="toggle">
      <div><slot name="header" /></div>
      <svg width="16" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg" class="fill-white ml-auto" :class="{ 'rotate-180': !open }">
        <path d="M8.85 0.48593L15.65 6.86094C16.12 7.30156 16.12 8.01406 15.65 8.45L14.52 9.50937C14.05 9.95 13.29 9.95 12.825 9.50938L8.005 4.99062L3.18499 9.50938C2.71499 9.95 1.95499 9.95 1.48999 9.50938L0.359993 8.45C-0.110008 8.00938 -0.110008 7.29687 0.359993 6.86094L7.16 0.48593C7.62 0.045305 8.38 0.045305 8.85 0.48593Z" />
      </svg>
    </header>
    <div class="p-6 pt-0 leading-loose" v-if="open">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const toggle = () => {
  open.value = !open.value
}
</script>
