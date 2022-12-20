import { atom } from "recoil";

export const searchFormState = atom({
  key: "SearchFormAtom",
  default: "",
});

export const cartState = atom({
  key: "CartAtom",
  default: [{ id: "", title: "", price: 0, image: "" }],
});

export const isDrawerOpenState = atom({
  key: "isDrawerOpenStates", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
