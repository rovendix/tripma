import { FC, HTMLAttributes } from "react";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { Footer } from "./Footer/Footer";
interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}
export const Layout: FC<LayoutProps> = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
