import React, {Component} from "react";
import {Link} from "react-router-dom";

class Maps extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          data
        })
      })
  }
  render() {
    const {data} = this.state;
    return (
      <div>
        <h1>DataItem:</h1>
        <ul style={{display: "flex", flexDirection:"column" }}>
          {data.map(( {id, title}) =>
            <li key={id}><Link to={`/maps/${id}`}>{title}</Link></li>
          )}
        </ul>
      </div>
    );
  }
}

export default Maps;