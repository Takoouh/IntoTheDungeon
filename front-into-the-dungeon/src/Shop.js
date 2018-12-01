import React, { Component } from "react"
import "./Shop.css"
import { Media } from "reactstrap"
import axios from "axios"

class Shop extends Component {

  componentDidMount() {
    this.props.fetchApi()
    axios.get("http://localhost:3010/api/items")
      .then(res => this.props.itemsList(res.data))
  }
  render() {



    return (
      <div>
        {console.log(this.props.items.map(item => item.name))}
        {this.props.items ? this.props.items.map(item => (
          <Media key={item.id}>

            <Media left href="#">
              <Media object src={item.picture} alt={item.name} />
            </Media>
            <Media body>
              <Media heading>
                {item.name}
              </Media>
              <p>Cost : {item.price} Gold</p>
              <p>Strength : {item.strength}</p>
              <p>Defense : {item.defense}</p>
            </Media>
          </Media>
        )) : ""}


      </div>
    )
  }

}

export default Shop