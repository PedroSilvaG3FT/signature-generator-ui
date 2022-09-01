import { ISignature } from "~~/interfaces/signature.interface";

export default defineComponent({
  names: "CredentialFormComponent",
  data() {
    return {
      formModel: {} as ISignature,
    };
  },
  methods: {
    onUpdateForm() {
      this.$emit("onUpdate", this.formModel);
    },
  },
});
