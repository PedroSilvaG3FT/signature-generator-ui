<template>
  <section id="credential-form" class="animate__animated animate__fadeIn">
    <h1>Gere sua assinatura em 1 minuto</h1>

    <form @submit.prevent="handleSubmit">
      <div>
        <label>Digite seu nome</label>
        <input
          type="text"
          name="name"
          v-model="formModel.name"
          placeholder="Digite seu nome"
        />
      </div>

      <div>
        <label>Insira sua área</label>
        <input
          type="text"
          name="occupation"
          placeholder="Insira sua área"
          v-model="formModel.occupation"
        />
      </div>

      <div>
        <label>
          Seu celular
          <small>(Opcional)</small>
        </label>

        <input
          type="text"
          name="telephone"
          v-telephone-mask
          placeholder="(00) 00000-0000"
          v-model="formModel.telephone"
        />
      </div>

      <button type="submit" :disabled="isInvalid">Gerar Assinatura</button>
    </form>
  </section>
</template>

<script src="./credential-form.component.ts" lang="ts"></script>
<style src="./credential-form.component.scss" lang="scss" scoped></style>
