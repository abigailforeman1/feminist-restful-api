import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import FeministForm from './FeministForm'

class FeministNew extends React.Component {
  state = {
    data: {
      name: '',
      yearBorn: '',
      placeOfBirth: '',
      occupation: '',
      image: '',
      description: ''
    },
    errors: {}
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
    console.log(this.state.data)
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post('/api/feminists', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      console.log(data)
      this.props.history.push(`/feminists/${data._id}`)
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <FeministForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            errors={this.state.errors}
          />
        </div>
      </section>
    )
  }

}

export default FeministNew