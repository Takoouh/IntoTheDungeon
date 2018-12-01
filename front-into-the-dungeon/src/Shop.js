import React, { Component } from "react"
import "./Shop.css"
import { Media } from "reactstrap"

class Shop extends Component {

  componentDidMount() {
    fetch("localhost:3010/api/monsters").then(data => this.props.itemsList(data))
  }
  render() {



    return (
      <div>
        {this.props.items.map((item, index) => (
          <Media key={index}>
            <Media left href="#">
              <Media object data-src="https://via.placeholder.com/150" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                {item.name}
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
          </Media>
        ))}
      </div>
    )
  }

}

export default Shop