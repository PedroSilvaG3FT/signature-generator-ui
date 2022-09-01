import telephoneMaskHelper from "~/helpers/telephone-mask.helper";

export default {
  updated(el) {
    el.maxLength = 15;
    const value = telephoneMaskHelper(el.value);
    if (value != el.value) el.value = value;
  },
};
