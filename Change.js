import React, { Component } from 'react'

export default class Change extends Component {

  render() {
      const {barang, gantiBarang} = this.props
    return (
      <div>
          <h2>ubah state ke props = {barang}</h2>
          <button onClick={() => gantiBarang("ASUS ROG V.5")}>ganti barang</button>
      </div>
    )
  }
}
