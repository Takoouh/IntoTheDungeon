import React, { Component } from "react"
import "./Shop.css"
import { Media } from "reactstrap"
import axios from "axios"

class Shop extends Component {

  componentDidMount() {
    this.props.loadingApi()
    axios.get("http://localhost:3010/api/items")
      .then(res => this.props.itemsList(res.data))
  }
  render() {
    console.log(this.props.isLoadingApi)


    return (
      <div>
        {this.props.isLoadingApi ? (
          <div><p className="text-center"><i className="fas fa-cog fa-spin"></i></p></div>
        ) : (
            this.props.items.map(item => (
              <Media key={item.id}>

                <Media left href="#">
                  <Media object src={item.picture} alt={item.name} />
                </Media>
                <Media body>
                  <Media heading className="d-flex justify-content-between">
                    {item.name}<span>{item.price} Gold</span>
                  </Media>
                  <p>Strength : {item.strength}<br />
                    Defense : {item.defense}</p>
                </Media>
              </Media>
            ))
          )}



      </div>
    )
  }

}

export default Shop