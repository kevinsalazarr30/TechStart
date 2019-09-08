import React, { Component } from 'react';
import './App.css';
import ListComponent from './components/ListComponent.js';
import socketIOClient from "socket.io-client";
import getInvoices from './function.js'
function TitleComponent() {
  return (
    <div className="Header">
      <h1>My List Invoice</h1>
    </div>
  )
}
class App extends Component {

  constructor(props) {
    super(props);
    getInvoices();
    //this.getInvoices = this;
  }
  state = {
    data: []
  }


  
  componentDidMount() {
    let _this = this;
    var socket = socketIOClient("http://localhost:3001");
    socket.on('load', function (data) {
      //this.approvedInvoice('321321321');
      getInvoices()
        .then(data => {
          console.log(data);
          _this.setState({ data: data })
        })
        .catch(error => {
          console.error(error);
        });
    });


    getInvoices()
      .then(data => {
        console.log(data);
        _this.setState({ data: data })
      })
      .catch(error => {
        console.error(error);
      });
  }



  approvedInvoice(_id) {
    const url = 'http://localhost:3001/Invoice/' + _id;
    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => console.log(res))
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  approvedBtn = _id => {
    const newInvoice = this.state.data.filter(invoice => invoice._id !== _id);
    this.approvedInvoice(_id);
    this.setState({ data: newInvoice })
  }

  render() {
    return (
      <div>
        <TitleComponent />
        <ListComponent stateList={this.state.data} approved={this.approvedBtn} />
      </div>
    );
  }


}


export default App;
