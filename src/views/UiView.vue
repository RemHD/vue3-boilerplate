<script setup lang="ts">
import CustomButtonComponent from '@/components/CustomButton.component.vue';
</script>

<template>
  <div class="w-screen">
    <NavBar />
  </div>
  <h1 class="title mt-2 px-4">UI Page</h1>

  <div class="container">
    <div class="flex px-4 space-x-4">
      <div class="subtitle">Buttons:</div>
      <CustomButtonComponent type="primary" texte="Primary"/>
      <CustomButtonComponent type="secondary" texte="Secondary"/>
      <CustomButtonComponent texte="Disabled" :isDisabled="true"/>
    </div>
  </div>
</template>

<style scoped></style>
