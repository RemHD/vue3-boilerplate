<script setup lang="ts">
import CustomForm from './../components/CustomForm.component.vue'
</script>

<template>
  <div class="w-screen">
    <NavBar />
  </div>
  <h1 class="title mt-2 px-4">UI Page</h1>

  <section>
    <div class="custom-container">
      <h2 class="subtitle">Components</h2>
      <div class="flex space-x-4">
        <h3>Buttons:</h3>
        <CustomButton type="primary" texte="Primary" />
        <CustomButton type="secondary" texte="Secondary" />
        <CustomButton texte="Disabled" :isDisabled="true" />
      </div>
      <div class="mt-2">
        <h3 class="mb-2">Forms:</h3>
        <CustomForm/>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
