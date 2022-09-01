<template>
  <section id="signature-user">
    <div>
      <span v-if="data.name">{{ data.name }}</span>
      <label v-else class="label-detail">Insira o seu Nome</label>
    </div>
    <div>
      <span v-if="data.occupation">{{ data.occupation }}</span>
      <label v-else class="label-detail">Insira o seu cargo</label>
    </div>
    <div>
      <span v-if="telephoneFormated">{{ telephoneFormated }}</span>
      <label v-else class="label-detail">Telefone (Opicional)</label>
    </div>
  </section>
</template>

<script src="./signature-user.component.ts" lang="ts"></script>
<style src="./signature-user.component.scss" lang="scss" scoped></style>
