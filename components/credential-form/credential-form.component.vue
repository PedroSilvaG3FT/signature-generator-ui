<template>
  <section id="credential-form" class="animate__animated animate__fadeIn">
    <form>
      <div>
        <label>Nome</label>
        <input
          type="text"
          name="name"
          @input="onUpdateForm"
          v-model="formModel.name"
        />
      </div>

      <div>
        <label>Ocupação</label>
        <input
          type="text"
          name="occupation"
          @input="onUpdateForm"
          v-model="formModel.occupation"
        />
      </div>

      <div>
        <label>
          Telefone
          <small>(Opcional)</small>
        </label>
        <input
          type="text"
          name="telephone"
          v-telephone-mask
          @input="onUpdateForm"
          v-model="formModel.telephone"
        />
      </div>
    </form>
  </section>
</template>

<script src="./credential-form.component.ts" lang="ts"></script>
<style src="./credential-form.component.scss" lang="scss" scoped></style>
