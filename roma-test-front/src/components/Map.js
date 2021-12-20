import React, {Component, Fragment} from "react";

class Map extends Component {
  state = {
    map: {},
  }

  componentDidMount() {
    const id = this.props.match.params.id || '';

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data
        })
      })
  }

  render() {
    const {post} = this.state;
    const {title, body} = Map;

    return (
      <Fragment>
        <h1>MAP</h1>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </Fragment>
    )
  }
}


export default Map;