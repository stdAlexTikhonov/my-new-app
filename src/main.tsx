import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { App } from "@/components";
import "@/i18n";
import { ThemePage, ProjectsPage, ContactsPage, BlogPage } from "@/pages";
import { RootLayout } from "./components/RootLayout/RootLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/my-new-app" element={<RootLayout />}>
          <Route index element={<App />} />
          <Route path="theme" element={<ThemePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
