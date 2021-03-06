import React from 'react'
import { Form } from 'semantic-ui-react'

const Search = ({searchTerm, updateSearch, handleSubmit}) => (
  <Form onSubmit={handleSubmit} >
    <Form.Input
      size='huge'
      icon='search'
      placeholder='Search...'
      value={searchTerm}
      onChange={updateSearch}
    />
  </Form>
)

export default Search
