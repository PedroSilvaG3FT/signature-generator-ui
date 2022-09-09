import html2canvas from "html2canvas";
import SignatureCard from "~/components/signature-card/signature-card.component.vue";

export default defineComponent({
  name: "SignaturePreviewComponent",
  components: { SignatureCard },
  props: ["data"],
  computed: {
    container(): HTMLElement {
      return document.getElementById("signature-card");
    },
  },
  methods: {
    handleExport() {
      const clone = this.container.cloneNode(true);

      clone.width = "700";
      clone.id = "signature-clone";
      clone.style.position = "fixed";
      clone.style.marginTop = "100vh";
      clone.style.paddingLeft = "12px";

      document.body.appendChild(clone);

      html2canvas(clone, { useCORS: true, allowTaint: true })
        .then((canvas) => {
          const image = canvas.toDataURL("image/png", 9);
          const element = document.createElement("a");

          element.download = "image.png";
          element.href = image;
          element.click();
        })
        .finally(() => clone.remove());
    },
    handleReset() {
      this.$emit("onClickReset");
    },
    handleClickTutorial() {
      this.$emit("onClickTutorial");
    },
  },
});
