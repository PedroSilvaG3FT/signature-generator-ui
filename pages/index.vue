<template>
  <section class="container">
    <ClientOnly>
      <img
        src="~/assets/images/logo.png"
        class="animate__animated animate__fadeInDown"
      />
      <h1 class="animate__animated animate__fadeInDown">
        Gerador de assinaturas e-mail
      </h1>

      <article>
        <CredentialForm @onUpdate="onUpdate" />
        <SignaturePreview :data="formModel" />
      </article>
    </ClientOnly>
  </section>
</template>

<script lang="ts">
import { ISignature } from "~/interfaces/signature.interface";
import CredentialForm from "~~/components/credential-form/credential-form.component.vue";
import SignaturePreview from "~/components/signature-preview/signature-preview.component.vue";

export default {
  components: {
    CredentialForm,
    SignaturePreview,
  },
  data() {
    return {
      formModel: {} as ISignature,
    };
  },
  methods: {
    onUpdate(form: ISignature) {
      this.formModel = form;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/styles/global.scss";

.container {
  height: 96vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: $text-lg;
    margin-bottom: 2.6rem;
  }

  > article {
    width: 80%;
  }
}
</style>
