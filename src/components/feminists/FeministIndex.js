import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class FeministIndex extends React.Component {
  state = { feminists: [] }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/feminists')
      this.setState({ feminists: data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.feminists.length) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.feminists.map(feminist => (
              <div key={feminist.name} className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
                <Link to={`/feminists/${feminist._id}`}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-header-title">{feminist.name}</h4>
                    </div>
                    <div className="card-image">
                      <figure className="image">
                        <img src={feminist.image} alt={feminist.name} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <h5 className="title is-6">{feminist.placeOfBirth}</h5>
                      {/* <h6 className="subtitle is-6">{feminist.user.username}</h6> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default FeministIndex