import React from 'react'
import { Input } from 'semantic-ui-react'

const LocationInput = ({location, handleLocationChange}) => (
  <div>
  <label>Location: </label>
    <Input
      size='mini'
      name='location'
      value={location}
      onChange={handleLocationChange}
    />
  </div>
)

export default LocationInput
