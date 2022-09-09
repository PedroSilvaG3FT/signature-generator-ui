<template>
  <section id="signature-user">
    <table>
      <tr>
        <td id="name">{{ data.name }}</td>
      </tr>
      <tr>
        <td id="occupation">{{ data.occupation }}</td>
      </tr>
      <tr v-if="telephoneFormated">
        <td id="telephone">{{ telephoneFormated }}</td>
      </tr>
    </table>
  </section>
</template>

<script src="./signature-user.component.ts" lang="ts"></script>
<style src="./signature-user.component.scss" lang="scss" scoped></style>
