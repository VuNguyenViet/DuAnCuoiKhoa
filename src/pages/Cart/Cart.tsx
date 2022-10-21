import React, { Component } from 'react'

type Props = {
    
}

type State = {
    number: number
}

export default class Cart extends Component<Props, State> {
  state = {
    number: 1
  }

  render() {
    return (
      <div>Cart</div>
    )
  }
}