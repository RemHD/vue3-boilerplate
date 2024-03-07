<template>
  <nav class="bg-gray-800 text-white">
    <div class="mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <!-- Left Section for Logo and Primary Menu -->
        <div class="flex items-center space-x-4">
          <!-- Logo / Brand -->
          <a href="#" class="text-lg font-semibold">Vue Boilerplate</a>
          <!-- Primary Menu visible on md and larger screens -->
          <div class="hidden md:flex space-x-4">
            <a href="#" class="hover:text-gray-400 transition-colors duration-300">UI</a>
          </div>
        </div>

        <!-- Burger Icon on the right for smaller screens -->
        <div class="flex md:hidden">
          <button @click="toggleMenu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                :class="{ hidden: isOpen }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                :class="{ hidden: !isOpen }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div :class="{ block: isOpen, hidden: !isOpen }" class="md:hidden">
      <a href="#" class="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300">UI</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>
