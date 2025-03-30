<script setup lang="ts">
import { NumberKeyProps } from '../types/propTypes';

defineProps<NumberKeyProps>();
</script>

<template>
    <button class="rounded-full h-17 w-17 bg-slate-100/20 font-bold text-3xl cursor-pointer tracking-wider text-center" @click="handle(number)">
        {{ number }}
    </button>
</template>