<script setup>

const date = new Date()

</script>

<template>
  <div>{{'Сегодня ' + date.toLocaleDateString(undefined,  { dateStyle: 'long' })}}</div>
</template>
