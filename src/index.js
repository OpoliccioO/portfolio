import React from "react";
import ReactDOM from "react-dom";
import App from "./components/containers/App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLaptop, faAt, faCode } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faLaptop, faAt, faCode);

ReactDOM.render(<App />, document.getElementById("root"));
