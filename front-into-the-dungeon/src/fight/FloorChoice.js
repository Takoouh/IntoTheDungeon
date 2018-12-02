import React, { Fragment } from "react"
import { Row, Col, Card, CardImg, CardTitle, CardText, CardImgOverlay } from "reactstrap"

const FloorChoice = () => {
  return (
    <Fragment>
      <Row>
        <Col xs="12">
          <h2>Go to next floor :</h2>
        </Col>
      </Row>
      <Row>
        <Col xs="3">
          <Card inverse>
            <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>Card Title</CardTitle>
            </CardImgOverlay>
          </Card>


        </Col>
      </Row>


      <Row>
        <Col xs="12">
          <h2>Visit an previous floor :</h2>
        </Col>
      </Row>
      <Row>
        <Col xs="3">
          <Card inverse>
            <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>Card Title</CardTitle>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
}

export default FloorChoice