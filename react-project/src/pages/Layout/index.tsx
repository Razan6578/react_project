import type React from "react";
import Footer from "../../components/Footer";
import './style.css'
import Header from "../../components/Header";

type LayoutProps = {
  title: string;
  children?: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) =>{


  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className="container">
          <h2>{title}</h2>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default Layout;
