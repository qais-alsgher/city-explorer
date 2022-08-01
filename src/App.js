import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './main';
import Header from './header';
import Footer from './footer'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
// import {} from 'dotenv/config';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      city:'',
      lat:'',
      long:'',
      imgUrl:'',
      name:'',
      errorM:'',
      errorImg:''
    }
}

handleChange=(e)=>{

  let q=e.target.value;
  this.setState({
      city:q
  });
}


handleSubmit=async(e)=>{
  e.preventDefault();
  const mainUrl =`https://us1.locationiq.com/v1/search.php?key=pk.b4a103b455cdd4e565619a9d076612ae&q=${this.state.city}&format=json`;
  const urlMap=`https://maps.locationiq.com/v3/staticmap?key=pk.b4a103b455cdd4e565619a9d076612ae&center=${this.state.lat},${this.state.long}&zoom=13`;

  
  axios.get(mainUrl).then((res)=>{
    const lat=res.data[0].lat;
    const long=res.data[0].lon;
    const name=res.data[1].display_name;
    this.setState({
        lat:lat,
        long:long,
        name:name
    })
}).catch((error)=>{
  this.setState({
      name:error.message
    });
});
  
  await axios.get(urlMap).then((res)=>{
            this.setState({
                imgUrl:res.config.url,
            })
        }).catch((error)=>{
          this.setState({
            errorImg:error.message
          });
          
        });
        
     
      
}
  render(){
  return (  
    <div className="App">
     
    <>
    <Header />
         <>
        <Form >
          <Form.Control type="text" placeholder="Enter citiry" id="city" onChange={this.handleChange}/>
         
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Explore
       </Button>
     </Form>
         </>
      <Main 
      show={this.state.show}
      imgUrl={this.state.imgUrl}
      name={this.state.name}
      errorImg={this.state.errorImg}
      errorM={this.state.errorM}
        />


    <Footer />
    </>
    </div>
  );}
}

export default App;
