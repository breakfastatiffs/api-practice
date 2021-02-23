import React from 'react';
import Item from './Item'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apod: [],
    }
  }

  //GET
  componentDidMount(){
    this.setState({ loading: true })
    fetch('https://api.nasa.gov/planetary/apod?api_key=xmVLeY7ByIptpRo2BL7kIKx7GVmsxK23obFsTRiS')
    .then(res => res.json())
    .then(data => {

      console.log(data)
      console.log(data.date)

        this.setState({
          apod: data
        })
    })
    .catch(err => console.log(err))

  }

  render(){
    return (
      <main className='App'>
        <p>Hi</p>
        <h1>{this.state.apod.date}</h1>
        {/* <Item apod={this.state.apod}/> */}
      </main>
    );
  }
}