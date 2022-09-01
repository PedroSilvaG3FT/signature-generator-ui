<template>
  <table width="700" cellpadding="0" cellspacing="0" id="signature-card">
    <tr>
      <td width="120" id="image-container">
        <img src="https://i.ibb.co/QYKg0zV/logo.png" width="120" />
      </td>
      <td width="380" id="details-container">
        <SignatureUser :data="data" />
      </td>
      <td width="200" id="contact-container" align="right">
        <SignatureContact />
      </td>
    </tr>
  </table>
</template>

<script src="./signature-card.component.ts" lang="ts"></script>
<style src="./signature-card.component.scss" lang="scss" scoped></style>
