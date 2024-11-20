import React from "react";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

function Layout({ children, modal }: Props) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}

export default Layout;
