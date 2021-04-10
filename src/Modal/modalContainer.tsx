import React, { Component, createContext } from "react";

const ModalContext = createContext({
  component: null,
  props: {},
  showModal: (component: any, props = {}) => {},
  hideModal: () => {},
});

const Consumer = ModalContext.Consumer;

export class ModalProvider extends React.Component {
  showModal = (component: any, props = {}) => {
    this.setState({
      component,
      props,
    });
  };

  hideModal = () =>
    this.setState({
      component: null,
      props: {},
    });

  state = {
    component: null,
    props: {},
    showModal: this.showModal,
    hideModal: this.hideModal,
  };

  render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

const Modal = (props: any) => {
  const Content = props.content;
  return <Content />;
};

const CloseButton = () => (
  <Consumer>
    {({ hideModal }) => <button onClick={hideModal}>닫기</button>}
  </Consumer>
);
