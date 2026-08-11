import { ThemeProvider } from "@/context";
import { Header, Footer } from "@/components";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};
