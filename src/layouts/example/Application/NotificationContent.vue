<template></template>
<script lang="ts" setup>
import { useNotification } from 'naive-ui'
//挂载在 window 方便与在js中使用
window['$notification'] = useNotification()
</script>
