import React, { Component, Fragment } from "react"
import "./FloorChoice.css"
import { Row, Col, Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap"
import axios from "axios"


class FloorChoice extends Component {

  selectFloorAndMonsters = (floor) => {
    this.props.showStartBattle();
    this.getMonstersQuery(floor)
  }

  getMonstersQuery = floor => {
    axios
      .get(`http://localhost:3010/api/monsters/floor=${floor}`)
      .then(res => this.props.getMonsters(res.data))
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col xs="12">
            <h2>Go to next floor :</h2>
          </Col>
        </Row>
        {this.props.stats[0] ? (
          <Fragment>

            <Row>
              <Col xs="3">
                <Card onClick={() => this.selectFloorAndMonsters(1)} inverse>
                  <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                  <CardImgOverlay>
                    <CardTitle>Floor {this.props.stats[0].currentFloor}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </Col>
            </Row>
            {/* {console.log(this.props.getCurrentFloor(6))} */}

            {(this.props.stats[0].currentFloor > 0) ?
              <Fragment>
                <Row>
                  <Col xs="12">
                    <h2>Visit a previous floor :</h2>
                  </Col>
                </Row>

                <Row>
                  {this.props.floorList.map((floor, index) => (
                    index !== 0 ?
                      <Col key={index} xs="3">
                        <Card inverse>
                          <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                          <CardImgOverlay>
                            <CardTitle>Floor {floor} </CardTitle>
                          </CardImgOverlay>
                        </Card>
                      </Col>
                      : ""
                  ))}

                </Row>
              </Fragment>
              : ""
            }
          </Fragment>

        ) : (
            <div><p className="text-center"><i className="fas fa-cog fa-spin"></i></p></div>
          )}

      </Fragment >
    )
  }
}

export default FloorChoice