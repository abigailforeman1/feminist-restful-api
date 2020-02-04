import React from 'react'

const FeministForm = ({ data, handleChange, handleSubmit, errors }) => (
  <div className="columns">
    <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter card">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className={`input ${errors.name ? 'is-danger' : ''}`}
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
        {/* {errors.name && <small className="help is-danger">{errors.name}</small>} */}
      </div>
      <div className="field">
        <label className="label">Year Born</label>
        <div className="control">
          <input
            className={`input ${errors.yearBorn ? 'is-danger' : ''}`}
            placeholder="Year Born"
            name="yearBorn"
            onChange={handleChange}
            value={data.yearBorn}
          />
        </div>
        {/* {errors.origin && <small className="help is-danger">{errors.origin}</small>} */}
      </div>
      <div className="field">
        <label className="label">Place of Birth</label>
        <div className="control">
          <input
            className={`input ${errors.placeOfBirth ? 'is-danger' : ''}`}
            placeholder="Place of Birth"
            name="placeOfBirth"
            onChange={handleChange}
            value={data.placeOfBirth}
          />
        </div>
        {/* {errors.image && <small className="help is-danger">{errors.image}</small>} */}
      </div>
      <div className="field">
        <label className="label">Occupation</label>
        <div className="control">
          <input
            className={`input ${errors.occupation ? 'is-danger' : ''}`}
            placeholder="Occupation"
            name="occupation"
            onChange={handleChange}
            value={data.occupation}
          />
        </div>
        {/* {errors.image && <small className="help is-danger">{errors.image}</small>} */}
      </div>
      <div className="field">
        <label className="label">Image URL</label>
        <div className="control">
          <input
            className={`input ${errors.image ? 'is-danger' : ''}`}
            placeholder="Image URL"
            name="image"
            onChange={handleChange}
            value={data.image}
          />
        </div>
        {/* {errors.image && <small className="help is-danger">{errors.image}</small>} */}
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={data.description}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-warning is-fullwidth">Add feminist!</button>
        </div>
      </div>
    </form>
  </div>
)

export default FeministForm