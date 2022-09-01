import linkedin from "~/assets/images/linkedin.png";
import instagram from "~/assets/images/instagram.png";
import facebook from "~/assets/images/facebook.png";
import twitter from "~/assets/images/twitter.png";

export default defineComponent({
  name: "SignatureContactComponent",
  data() {
    return {
      items: [
        {
          title: "Linkedin",
          link: "",
          imageURL: "https://i.ibb.co/JnR61H5/linkedin.png",
        },
        {
          title: "Instagram",
          link: "",
          imageURL: "https://i.ibb.co/xHVG21b/instagram.png",
        },
        {
          title: "Facebook",
          link: "",
          imageURL: "https://i.ibb.co/yVnvsCC/facebook.png",
        },
        {
          title: "Twitter",
          link: "",
          imageURL: "https://i.ibb.co/7Sfjt59/twitter.png",
        },
      ],
    };
  },
});
