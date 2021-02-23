import React from 'react';
import Item from './Item'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apod: [],
      inputValue: ''
    }
  }

  //GET
  componentDidMount(){
    this.setState({ loading: true })
    fetch(`https://api.nasa.gov/planetary/apod?api_key=xmVLeY7ByIptpRo2BL7kIKx7GVmsxK23obFsTRiS`)
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

  updateInput = (e) => {
    e.preventDefault()
    this.setState({inputValue: e.target['search-field'].value}, this.componentDidMount)
  }

  render(){
    return (
      <main className='App'>

        <form onSubmit={this.updateInput}>
          <label>Find a specific date:</label>
          <input id='search-field' type='text' />
          <button>Search</button>
        </form>

        <h1>{this.state.apod.title}</h1>
        <p>{this.state.apod.date}</p>
        <p>{this.state.apod.explanation}</p>
        {/* <Item apod={this.state.apod}/> */}
      </main>
    );
  }
}