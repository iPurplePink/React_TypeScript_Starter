import React, { FC } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Layout: FC = ({ children }) => {
  return (
    <section className="layout-section">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </section>
  );
};

export default Layout;
