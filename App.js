import React, { Component } from 'react'
import Change from './Change';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      barang: 'Laptop'
    })
  }

gantiBarang = (barang_baru) => {
  this.setState({
    barang: barang_baru
  })
}

  render() {
    return (
      <div>
        <h2>{this.state.barang}</h2>
        <button onClick={() => this.gantiBarang("ASUS ROG V.5")}>ganti barang</button>
        <Change barang={this.state.barang} gantiBarang={this.gantiBarang}/> 
      </div>
    )
  }
}
