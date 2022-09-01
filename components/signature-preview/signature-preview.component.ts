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
    disabledAction() {
      return !this.data || !this.data.name || !this.data.occupation;
    },
  },
  methods: {
    _showLabels(show: boolean) {
      const labels = document.getElementsByClassName("label-detail");

      [...labels].forEach((label: HTMLElement) => {
        label.style.visibility = show ? "visible" : "hidden";
      });
    },
    _showContact(show: boolean) {
      const contactContainer = document.getElementById("contact-container");
      contactContainer.style.visibility = show ? "visible" : "hidden";
    },
    handleCopy() {
      const selection = window.getSelection();
      if (selection) selection.removeAllRanges();

      this._showLabels(false);

      const range = document.createRange();

      range.selectNode(this.container);
      selection.addRange(range);
      document.execCommand("copy");

      selection.removeAllRanges();
      setTimeout(() => this._showLabels(true), 150);
    },
    handleExport() {
      this._showContact(false);

      html2canvas(this.container)
        .then((canvas) => {
          const image = canvas.toDataURL("image/jpeg", 9);
          const element = document.createElement("a");

          element.download = "image.jpeg";
          element.href = image;
          element.click();
        })
        .finally(() => {
          this._showContact(true);
        });
    },
  },
});
