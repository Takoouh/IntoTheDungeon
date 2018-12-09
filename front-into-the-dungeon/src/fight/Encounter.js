import React, { Component, Fragment } from "react"
import { Row, Col, Button, Progress } from "reactstrap"

class Encounter extends Component {

  // isDead() {
  //   this.props.adventurer.healthPoint === 0 ? this.props.getKilled(this.props.adventurer) : ""
  // }
  attackMonster(monster, adventurer) {
    this.props.resolveAttack(monster, adventurer)
    if (this.props.adventurer.healthPoint <= 0) { this.props.viewDeathScreen() }


  }

  render() {
    return (
      <Fragment>
        {this.props.monster.name ?
          <Fragment>
            <Row>
              <Col xs="12">{this.props.monster.name}</Col>
            </Row>
            <Row>
              <Col xs="12"><img src={this.props.monster.picture} /></Col>
            </Row>
            <Row>
              <Col xs="4"><div className="text-center">{this.props.monster.currentHp}/{this.props.monster.healthPoint}</div>
                <Progress value={(this.props.monster.currentHp / this.props.monster.healthPoint) * 100} /></Col>
              <Col xs="4">{this.props.monster.strength}</Col>
              <Col xs="4">{this.props.monster.defense}</Col>
            </Row>

            <Row>
              <Col xs="3"><Button onClick={() => this.attackMonster(this.props.monster, this.props.adventurer)}>Attack</Button></Col>
              <Col xs="3"><Button>Defend</Button></Col>
              <Col xs="3"><Button>Run</Button></Col>
            </Row>
          </Fragment>
          : ""
        }

      </Fragment>
    )
  }
}

export default Encounter