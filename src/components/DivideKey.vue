<script setup lang="ts">
import { DivideKeyProps } from '../types/propTypes';

defineProps<DivideKeyProps>();
</script>

<template>
    <button
        class="rounded-full h-17 w-17 bg-neutral-950/25 font-bold text-2xl cursor-pointer tracking-wider text-center"
        @click="handle('/')">
        /
    </button>
</template>