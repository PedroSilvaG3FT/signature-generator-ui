import { ISignature } from "~~/interfaces/signature.interface";

export default defineComponent({
  names: "CredentialFormComponent",
  computed: {
    isInvalid() {
      return !this.formModel.name || !this.formModel.occupation;
    },
  },
  data() {
    return {
      formModel: {} as ISignature,
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("onSubmit", this.formModel);
    },
  },
});
