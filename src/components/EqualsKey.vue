<script setup lang="ts">
import { EqaulsKeyProps } from '../types/propTypes';

defineProps<EqaulsKeyProps>();
</script>


<template>
    <button class="rounded-full h-17 w-17 bg-blue-500 font-bold text-2xl cursor-pointer tracking-wider text-center"
        @click="handle">
        =
    </button>
</template>