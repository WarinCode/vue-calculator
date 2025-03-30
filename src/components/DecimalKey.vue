<script setup lang="ts">
import { DecimalKeyProps } from '../types/propTypes';

defineProps<DecimalKeyProps>();
</script>

<template>
    <button class="rounded-full h-17 w-17 bg-slate-100/20 font-bold text-2xl cursor-pointer tracking-wider text-center"
        @click="handle('.')">
        .
    </button>
</template>