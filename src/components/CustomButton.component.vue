<template>
  <button type="button" :class="buttonClass" :style="style" @click="onClick">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import '../assets/css/tailwind.css'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    // Nom du button
    label: string
    // Bouton primaire ou secondaire
    isPrimary?: boolean
    // Changement de couleur
    backgroundColor?: string
    // Bouton non cliquable
    isDisabled?: boolean
  }>(),
  {
    isPrimary: true,
    isDisabled: false
  }
)

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const buttonClass = computed(() => ({
  'custom-primary-button': props.isPrimary,
  'custom-secondary-button': !props.isPrimary,
  'custom-disabled-button': props.isDisabled
}))

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}))

const onClick = () => {
  emit('click', 1)
}
</script>
