import telephoneMaskHelper from "~/helpers/telephone-mask.helper";

export default defineComponent({
  name: "SignatureUserComponent",
  props: ["data"],
  computed: {
    telephoneFormated() {
      if (!this.data || !this.data.telephone) return "";
      return telephoneMaskHelper(this.data.telephone);
    },
  },
});
