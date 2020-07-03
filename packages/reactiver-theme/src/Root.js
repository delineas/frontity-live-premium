import React from "react";
import { connect, styled, Global, css } from "frontity";
import Link from "./Link";
import Items from './Items'
import Item from "./Item";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "reactstrap";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global styles={css(bootstrap)} />
      <Navbar>
        <Link href="/">Index</Link>
        <Link href="/page/2">Page 2</Link>
        <Link href="/about-us">About us</Link>
      </Navbar>
      <h1>Reactivers molan mazo!</h1>
      <p>Ruta: {state.router.link}</p>
      <hr />
      <div className="container">
        {data.isPost && <Item />}
        {data.isArchive && <Items />}
        {data.isPage && <Item />}
      </div>
    </>
  );
};

export default connect(Root);

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eee;
`