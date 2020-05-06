import { h } from "hyperapp"
import Header from "./Header.js"
import TopImg from "./TopImg.js"
// import Painter from "./Painter.js"

export default function App(props, actions) {
  return h("div", null, [
    Header(), 
    TopImg(),
  ]);
}
