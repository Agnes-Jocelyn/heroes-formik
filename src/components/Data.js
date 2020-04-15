import React, { Component } from "react";
import Axios from "axios";
import "./Style.css";

export default class componentName extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    Axios.get(`http://localhost:8000/heroes`).then((response) => {
      console.log(response);
      this.setState({ data: response.data });
    });
  }
  render() {
    return (
      <div className="isi">
        <div className="container">
          <div className="row" id="list">
            <div className="col-sm-6">
              <br />
              {this.state.data.map((data) => (
                <span key={data.id}>Nama : {data.name}</span>
              ))}
              <br/>
              {this.state.data.map((data) => (
                <span key={data.id}>Born : {data.born}</span>
              ))}
              <br />
              {this.state.data.map((data) => (
                <span key={data.id}> Died : {data.died}</span>
              ))}
              <br />
              {this.state.data.map((data) => (
                <span key={data.id}> Description : {data.description}</span>
              ))}
              <br />
              {this.state.data.map((data) => (
                <span key={data.id}> Establishment : {data.establishment}</span>
              ))}
              <br />
              {this.state.data.map((data) => (
                <img
                  src={data.imgUrl}
                  key={data.id}
                  width="250px"
                  height="250px"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
