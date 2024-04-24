import React from "react";
import ReactDOM from "react-dom";

import Button from "microfrontend_remote1/Button";
import Button2 from "microfrontend_remote2/Button2";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Button />
    <Button2 />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
