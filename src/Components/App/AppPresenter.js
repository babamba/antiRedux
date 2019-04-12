import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyle = createGlobalStyle`
     ${reset};
     body{
          background-color:#ecf0f1;
     }
`;

const AppPresenter = () => (
  <Fragment>
     <GlobalStyle body/>
    <Header />
    <Flex alignCenter full column>
      <Notification text={"Hello"} seen={false} />
    </Flex>
  </Fragment>
);

export default AppPresenter;