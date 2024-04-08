<script setup lang="ts">
const { data } = await useFetch(`${flare_host()}/admin/log/recent`, { credentials: 'include', mode: 'cors' });
</script>

<template>
  <table>
    <tbody>
     <tr v-for="(log, i) of data.logs" :key="i">
       <td><DateTime :date="log.datetime" :spacing="true" :time="true" /></td>
       <td>{{ log.detail }}</td>
       <td>{{ log.cached }}</td>
     </tr>
    </tbody>
  </table>
</template>
