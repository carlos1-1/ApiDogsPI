import React from "react";
//import { Link } from "react-router-dom";

import "../styles/card.css";

class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="container-card">
          {this.props.name !== "I am sorry, your dog does not exist" ? (
            <div className="card">
              <img src={this.props.image} alt="dog" />
              <h2>{this.props.name}</h2>

              <h4>
                {" "}
                Weight: {this.props.min_weight}-{this.props.max_weight} kg
              </h4>
              <h4>Temperament:</h4>
              <p>{this.props.temperament}</p>
              <a href={`/dogs/${this.props.id}`}>Details</a>
            </div>
          ) : (
            <div className="card">
              <img src={this.props.image} alt="dog" />
              <h2>{this.props.name}</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Card;
/*
 <div className="infocardContainer">
        <Link to={`/dogs/${this.props.id}`}>
          <div id="main">
            <img src={this.props.image} alt="dog"></img>
          </div>
        </Link>
        <div id="textbois">
          <h2>{this.props.name}</h2>
          <h4>
            Weight: {this.props.min_weight}-{this.props.max_weight} kg
          </h4>
          <h4>Temperament:</h4>
          <h5>{this.props.temperament}</h5>
        </div>
      </div>
*/
