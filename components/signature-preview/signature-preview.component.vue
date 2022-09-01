<template>
  <section id="signature-preview" class="animate__animated animate__fadeInUp">
    <SignatureCard :data="data" />

    <article>
      <button :disabled="disabledAction" @click="handleCopy">Cópiar</button>
      <button :disabled="disabledAction" @click="handleExport">Exportar</button>
    </article>
  </section>
</template>

<script src="./signature-preview.component.ts" lang="ts"></script>
<style src="./signature-preview.component.scss" lang="scss" scoped></style>
