import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Store from "store";

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
     <Store.Consumer>
          { store => {
               return Object.keys(store.notifications).map(key =>  (
                         <Notification 
                              key={store.notifications[key].id }
                              id={store.notifications[key].id }
                              text={store.notifications[key].text }
                              seen={store.notifications[key].seen }
                         />
               ));
          }}
     </Store.Consumer>
                {/* <Notification text={"Hello"} seen={false} /> */}
    </Flex>
  </Fragment>
);

export default AppPresenter;