<script setup lang="ts">
import { ExpressionProps } from '../types/propTypes';

defineProps<ExpressionProps>();
</script>

<template>
    <div>
        <h3 class="font-bold text-4xl tracking-widest text-end truncate h-9">{{ expression }}</h3>
    </div>
</template>