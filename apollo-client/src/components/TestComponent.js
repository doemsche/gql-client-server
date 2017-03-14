import React from 'react'
import styled from 'styled-components'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


const Title = styled.div`
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
`

class TestComponent extends React.Component {

  render () { 
    console.log(this.props.data)
    return (
      <Title className='w-100 bg-light-gray min-vh-100'>
        {this.props.data.hello} {this.props.data.name}
      </Title>
    )
  }
}

const MyQuery = gql`
  {
    hello,
    name
  }
`

const TestComponentWithData = graphql(MyQuery)(TestComponent)

export default TestComponentWithData