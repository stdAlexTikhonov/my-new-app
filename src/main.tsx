import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { App } from "@/components";
import "@/i18n";
import { ThemePage } from "@/pages";
import { RootLayout } from "./components/RootLayout/RootLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/my-new-app" element={<RootLayout />}>
          <Route index element={<App />} />
          <Route path="theme" element={<ThemePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
