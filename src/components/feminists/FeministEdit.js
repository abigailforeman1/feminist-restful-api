import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import FeministForm from './FeministForm'

class FeministEdit extends React.Component {
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

  async componentDidMount() {
    const feministId = this.props.match.params.id
    try {
      const { data } = await axios.get(`/api/feminists/${feministId}`)
      this.setState({ data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const feministId = this.props.match.params.id
    try {
      const { data } = await axios.put(`/api/feminists/${feministId}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
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

export default FeministEdit