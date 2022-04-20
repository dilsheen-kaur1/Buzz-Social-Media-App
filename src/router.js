import { Component } from "react";

const withRouter = (Component) => {
  const Wrapper = (props) => {

    return <Component  {...props}/>
  }
  return Wrapper;
};

export default withRouter;