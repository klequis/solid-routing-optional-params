import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="component background-purple">
          <div class="file-name">app.tsx</div>
          <div class="my-background">My background is purple.</div>
          <a class="button-1" href="/">/</a>
          <a class="button-1" href="/optional-param">/optional-param</a>
          <a class="button-1" href="/optional-param/3">/optional-param/3</a>
          <a class="button-1" href="/just-catch-all">/just-catch-all</a>
          <a class="button-1" href="/just-catch-all/3">/just-catch-all/3</a>
          <Suspense>{props.children}</Suspense>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}