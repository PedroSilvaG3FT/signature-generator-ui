<template>
  <section>
    <ClientOnly>
      <TutorialContainer v-if="isShowTutorial" @onClickClose="hideTutorial" />
      <SignaturePreview
        :data="formModel"
        @onClickReset="onClickReset"
        @onClickTutorial="showTutorial"
        v-else-if="enablePreview"
      />
      <CredentialForm @onSubmit="onSubmit" v-else />
    </ClientOnly>
  </section>
</template>

<script lang="ts">
import { ISignature } from "~/interfaces/signature.interface";
import CredentialForm from "~~/components/credential-form/credential-form.component.vue";
import SignaturePreview from "~/components/signature-preview/signature-preview.component.vue";
import TutorialContainer from "~/components/tutorial-container/tutorial-container.component.vue";

export default {
  components: {
    CredentialForm,
    SignaturePreview,
    TutorialContainer,
  },
  computed: {
    enablePreview() {
      return !!Object.keys(this.formModel).length;
    },
  },
  data() {
    return {
      isShowTutorial: false,
      formModel: {} as ISignature,
    };
  },
  methods: {
    onSubmit(form: ISignature) {
      this.formModel = form;
    },
    onClickReset() {
      this.formModel = {};
    },
    showTutorial() {
      this.isShowTutorial = true;
    },
    hideTutorial() {
      this.isShowTutorial = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/styles/global.scss";
</style>
