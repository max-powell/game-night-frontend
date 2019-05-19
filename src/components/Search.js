import React from 'react'
import { Form } from 'semantic-ui-react'

const Search = ({value, onChange, handleSubmit}) => (
  <Form onSubmit={handleSubmit}>
    <Form.Input icon='search' placeholder='Search users...' onChange={updateSearch} value={searchTerm} />
  </Form>
)

export default Search
