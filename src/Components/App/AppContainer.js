import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props){
    super(props)
    this._deleteNotification = id => {
      this.setState(currentState => {
        const newState = delete currentState.notifications[id];
        return newState;
      })
    }

    this._setNotification = id => {
      this.setState(currentState => {
        return {
          ...currentState,
          notifications:{
            ...currentState.notifications,
            [id] : {
              ...currentState.notifications[id],
            seen : true
            }
          }
        }
      })
    }

    this.state = {
      //test data
      notifications: {
        "1": {
          id: 1,
          text: "Something",
          seen: false
        },
        "2": {
          id: 2,
          text: "Something else",
          seen: false
        },
        "3": {
          id: 3,
          text: "Something else but different",
          seen: true
        }
      },
      deleteNotification : this._deleteNotification,
      setNotification : this._setNotification
    };

    // Provider 에 포함 시키고 싶은 함수는 constructor 안에 있어야함 

    // this._changeMessage = () => {
    //   if(this.state.message === "Hello"){
    //     this.setState({
    //       message: "Bye bye"
    //     })
    //   }else{
    //     this.setState({
    //       message: "Hello"
    //     })
    //   }
    // };

    // this.state = {
    //   message:"Hello",
    //   isLoggedIn : false,
    //   changeMessage : this._changeMessage
    // }
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;