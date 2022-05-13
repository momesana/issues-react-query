import { render } from "react-dom";
import { lazy, Suspense } from "react";

const App = lazy(() => import("./App"));
const container = document.getElementById("root");
render(
  <Suspense fallback="...loading">
    <App />
  </Suspense>,
  container
);
