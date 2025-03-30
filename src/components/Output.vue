<script setup lang="ts">
import { OutputProps } from '../types/propTypes';

defineProps<OutputProps>();
</script>

<template>
    <div>
        <h4 v-if="output.length === 0" class="mt-4 h-[30px]"></h4>
        <h4 v-else class="text-end text-3xl font-bold text-gray-300 mt-4 tracking-widest h-[30px] truncate"> = {{ output }}</h4>
    </div>
</template>