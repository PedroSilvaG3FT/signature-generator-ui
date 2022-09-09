<template>
  <table
    width="100%"
    bgcolor="#fff"
    cellpadding="0"
    cellspacing="0"
    id="signature-card"
  >
    <tr>
      <td width="20%" id="image-container">
        <img src="https://i.ibb.co/QYKg0zV/logo.png" width="90" />
      </td>
      <td width="60%" id="details-container">
        <SignatureUser :data="data" />
      </td>
      <td width="20%" id="contact-container" align="right">
        <SignatureContact />
      </td>
    </tr>
  </table>
</template>

<script src="./signature-card.component.ts" lang="ts"></script>
<style src="./signature-card.component.scss" lang="scss" scoped></style>
