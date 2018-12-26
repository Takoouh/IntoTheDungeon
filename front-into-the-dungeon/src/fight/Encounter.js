import React, { Component, Fragment } from "react"
import { Row, Col, Button, Progress } from "reactstrap"
import { Link } from "react-router-dom"
import axios from "axios"

class Encounter extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.adventurer !== this.props.adventurer) {
      axios
        .put('http://localhost:3010/api/adventurer/1', { ...this.props.adventurer })
    }
  }

  getSelectedMonsterStats = () => {
    const rdmIdMonster = Math.ceil(Math.random() * this.props.monsterList.length)
    axios
      .get(`http://localhost:3010/api/monster/${rdmIdMonster}`)
      .then(res => this.props.getMonsterStats(res.data[0]))
      .then(() => this.props.showEncounter())
  }


  attackMonster(monster, adventurer) {
    this.props.resolveAttack(monster, adventurer)
    if (this.props.adventurer.healthPoint <= this.props.monster.strength && this.props.monster.currentHp > this.props.adventurer.strength) {
      this.props.viewDeathScreen()
    } else if (this.props.adventurer.strength >= this.props.monster.currentHp) {
      if (Math.random() * 10 > 9) {
        this.props.unlockUpperFloor(this.props.adventurer, this.props.monster)
      } else {
        this.props.getReward(this.props.adventurer, this.props.monster)
      }
    }

  }



  render() {
    return (
      <Fragment>
        {this.props.monster.healthPoint ?
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
            {this.props.monster.currentHp > 0 ?
              <Row>
                <Col xs="3"><Button onClick={() => this.attackMonster(this.props.monster, this.props.adventurer)}>Attack</Button></Col>
                <Col xs="3"><Button>Defend</Button></Col>
                <Col xs="3"><Button>Run</Button></Col>
              </Row>
              :
              <Fragment>
                <Row>
                  <Col xs="12">
                    <h2>You won ! Here is your reward !</h2>
                  </Col>
                </Row>

                <Row>
                  <Col xs="6">
                    <p>{this.props.monster.experience} XP</p>
                  </Col>
                  <Col xs="6">
                    <p><i className="fas fa-coins pl-2"></i>{this.props.monster.gold} Gold</p>
                  </Col>
                </Row>

                <Row>
                  <Col xs="3"><Button onClick={() => this.getSelectedMonsterStats()}>Find Another Monster</Button></Col>
                  <Col xs="3"><Button onClick={() => this.props.viewFloorList()}>Change Floor</Button></Col>
                  <Col xs="3"><Link to="/inn">Go to the Inn</Link></Col>
                </Row>
              </Fragment>
            }

          </Fragment>
          : ""
        }

      </Fragment>
    )
  }
}

export default Encounter