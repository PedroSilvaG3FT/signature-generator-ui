<template>
  <section id="signature-preview" class="animate__animated animate__fadeIn">
    <h1>Veja como ficou sua assinatura</h1>

    <SignatureCard :data="data" />

    <article>
      <button @click="handleExport">Exportar</button>
      <button @click="handleReset">Refazer</button>

      <a @click="handleClickTutorial">Veja como inserir a imagem no e-mail</a>
    </article>
  </section>
</template>

<script src="./signature-preview.component.ts" lang="ts"></script>
<style src="./signature-preview.component.scss" lang="scss" scoped></style>
