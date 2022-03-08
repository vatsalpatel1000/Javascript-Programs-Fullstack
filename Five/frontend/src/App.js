import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      selectedInventory: null,
    };
  }
  
  componentDidMount(){
    axios.get('http://localhost:9000/').then(res => {
      this.setState(() => ({
        inventory: res.data.inventory,
      }));
    }).catch(err => {
      console.log(err);
    });
  }


  render() {
    return(
     
      <React.Fragment>

            <table border="2" cellspacing="2" cellpadding="2">
                <thead>
                    <th>SR NO</th>
                    <th>NAME</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>TOTAL</th>
                </thead>
                <tbody>
                  {
                    this.state.inventory.map((data,index)=>{
                      return(
                        <tr key={index+1}>
                          <td>{index}</td>
                          <td>{data.name}</td>
                          <td>{data.quantity}</td>
                          <td>{data.price}</td>
                          <td>{data.total}</td>
                        </tr>
                      )

                    })
                  }
                </tbody>
            </table>
        </React.Fragment>
    );
  }

}
export default App;
