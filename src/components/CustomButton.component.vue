<template>
  <div class="space-x-2" :class="buttonClass">
    <button>
      {{ texte }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    texte: string
    type?: string
    isDisabled: boolean
  }>(),
  {
    type: 'primary',
    isDisabled: false
  }
)

const buttonClass = computed(() => ({
  'custom-primary-button': props.type === 'primary',
  'custom-secondary-button': props.type === 'secondary',
  'custom-disabled-button': props.isDisabled
}))
</script>
