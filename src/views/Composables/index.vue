<script setup>
import { useMouse } from './js/useMouse'

const { x, y } = useMouse()
</script>

<template>鼠标位置: {{ x }}, {{ y }}</template>