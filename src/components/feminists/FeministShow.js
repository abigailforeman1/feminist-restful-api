import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
// import MapGL, { Marker } from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'
// const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

class FeministShow extends React.Component {
  state = {
    feminist: {}
    // comments: {
    //   text: ''
    // },
    // newComment: '',
    // errors: {}
  }

  async componentDidMount() {
    const feministId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/feminists/${feministId}`)
      this.setState({ feminist: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  // handleSubmit = async (e) => {
  //   e.preventDefault()
  //   console.log('clicked')
  // }

  // handleChange = e => {
  //   this.setState({ newComment: e.target.value })
  // }

  handleDelete = async () => {
    const feministId = this.props.match.params.id
    try {
      await axios.delete(`/api/feminists/${feministId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/feminists')
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  // isOwner = () => Auth.getPayload().sub === this.state.feminist.user._id

  render() {
    // console.log(this.state.newComment)
    const { feminist } = this.state
    if (!feminist._id) return null

    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{feminist.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-third">
              <figure className="image">
                <img src={feminist.image} alt={feminist.name} />
              </figure>
            </div>
            <div className="column is-third">
              <h4 className="title is-4">Year of Birth</h4>
              <p>{feminist.yearBorn}</p>
              <hr />
              <h4 className="title is-4">Place of Birth</h4>
              <p>{feminist.placeOfBirth}</p>
              <hr />
              <h4 className="title is-4">Occupation</h4>
              <p>{feminist.occupation}</p>
              <hr />
              <h4 className="title is-4">Known for...</h4>
              <p>{feminist.description}</p>
              <hr />
              <div className="column is-third">
                {/* {feminist.placeOfBirth && // add a check before the Map and only add it if the wine has a location (some wines maybe won't)
                  <MapGL
                    mapboxApiAccessToken={mapboxToken}
                    height={'500px'}
                    width={'500px'}
                    mapStyle="mapbox://styles/abigailforeman1/ck5leceot3qs81io9spljustc"
                    zoom={1}
                    country={feminist.country}
                  >
                    <Marker
                      country={feminist.country}
                    >
                      <div className="marker" />
                    </Marker>
                  </MapGL>
                } */}
              </div>
              {/* {this.isOwner() &&  */}
              {/* <h4 className="title is-4">Comments</h4> */}
              <>
                {/* <form onSubmit={this.handleSubmit}>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Add your comments - max 100 characters"
                      name="text"
                      onChange={this.handleChange}
                      value={this.state.newComment}
                    />
                  </div>
                  <button type="submit" className="button is-warning">Add comment!</button>
                </form> */}

                <Link to={`/feminists/${feminist._id}/edit`} className="button is-warning">
                  Edit Feminist
                </Link>
                <button onClick={this.handleDelete} className="button is-danger">Delete Feminist</button>
              </>
              {/* }  */}
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default FeministShow