import React, { Component } from "react"
import StatsContainer from "./_containers/StatsContainer";
import NavContainer from "./_containers/NavContainer";
import { Route, Switch } from "react-router-dom"
import { Row, Col } from "reactstrap"
import ShopContainer from './_containers/ShopContainer';
import BattleViewContainer from './_containers/BattleViewContainer';
import InnContainer from './_containers/InnContainer';


import './navbar.scss';

class MainFrame extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {

    return (
      <Row className="h-100">
        <div style={{ width: this.state.collapse ? "160px" : "50px" }} className="navBar align-items-end">
          <button onClick={this.toggle} className="navExtend">{this.state.collapse ? <i className="fas fa-arrow-left"></i> : <i className="fas fa-arrow-right"></i>}</button>
          <NavContainer collapsed={this.state.collapse} />
        </div>
        <Col className="col content">
          <Switch>
            <Route exact path="/" component={BattleViewContainer} />
            <Route path="/shop" component={ShopContainer} />
            <Route path="/inn" component={InnContainer} />
          </Switch>
        </Col>
        <Col xs="3 charaStatus">
          <StatsContainer />
        </Col>
      </Row >
    )
  }
}

export default MainFrame