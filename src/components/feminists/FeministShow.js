import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
// import { comment } from 'postcss-selector-parser'

// import MapGL, { Marker } from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'
// const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

class FeministShow extends React.Component {
  state = {
    feminist: {},
    text: ''
  }

  async getData() {
    const feministId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/feminists/${feministId}`)
      console.log('gotdata', res.data.comments.length)
      this.setState({ feminist: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.getData()
  }

  handleChange = e => {
    const text = e.target.value
    // console.log(text)
    this.setState({ text })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const feministId = this.props.match.params.id
    try {
      await axios.post(`/api/feminists/${feministId}/comments`, { text: this.state.text }, { // posting the text thats saved in state to the comments in the database
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ text: '' })
    } catch (err) {
      this.props.history.push('/notfound')
    }
    this.getData()
  }

  // handleClick = async (e) => {
  //   console.log(e.target.)
  //   const feministId = this.props.match.params.id
  //   try {
  //     axios.delete(`/api/feminists/${feministId}/comments/${this.state.comment._id}`)
  //   } catch (err) {
  //     this.props.history.push('/notfound')
  //   }
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

  isOwner = () => Auth.getPayload().sub === this.state.feminist.user

  render() {
    const { feminist, text } = this.state
    console.log(this.state.text)
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

              <h4 className="title is-4">Comments</h4>

              <>
                {feminist.comments.map(comment => (
                  <div key={comment._id}>
                    <p>{comment.text}</p>
                    {/* <button onClick={this.handleClick} type="submit" className="button">Delete comment</button> */}
                  </div>
                ))}
              </>

              <form onSubmit={this.handleSubmit}>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Add your comments - max 100 characters"
                    name="text"
                    onChange={this.handleChange}
                    value={text}
                  />
                </div>
                <button type="submit" className="button is-warning">Add comment!</button>
              </form>

              <hr />

              {this.isOwner() &&
                <>
                  <Link to={`/feminists/${feminist._id}/edit`} className="button is-warning">
                    Edit Feminist
                  </Link>

                  <button onClick={this.handleDelete} className="button is-danger">Delete Feminist</button>
                </>
              }

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default FeministShow