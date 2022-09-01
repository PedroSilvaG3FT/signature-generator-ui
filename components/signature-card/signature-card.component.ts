import SignatureUser from "./signature-user/signature-user.component.vue";
import SignatureContact from "./signature-contact/signature-contact.component.vue";

export default defineComponent({
  name: "SignatureCardComponent",
  components: { SignatureUser, SignatureContact },
  props: ["data"],
});
