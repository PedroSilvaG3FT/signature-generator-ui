export default defineComponent({
  name: "TutorialContainerComponent",
  data() {
    return {
      items: ["Vá em configurções", "Assinatura", "Adicionar imagem", "Salvar"],
    };
  },
  methods: {
    handleClickClose() {
      this.$emit("onClickClose");
    },
  },
});
