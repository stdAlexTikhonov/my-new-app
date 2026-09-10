import { ThemeProvider } from "@/context";
import { Header, Footer } from "@/components";
import { Outlet } from "react-router";
import styles from "./RootLayout.module.scss";

export const RootLayout = () => {
  return (
    <ThemeProvider>
      <div className={styles.layout}>
        <Header />
        <div className={styles.content}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
