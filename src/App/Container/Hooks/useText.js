import  { useState } from "react";
import { initialText } from "./InitialText.js";
const useText = (initialValue = initialText) => {
  let localStorageValue = window.localStorage.getItem("sreio_md2pdf")  ?? initialText
  const [state, setState] = useState(localStorageValue);
  return [state, setState];
};
export default useText;
