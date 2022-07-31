import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Footer from './footer'; 
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
// import {} from 'dotenv/config';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      allcountry:[]
    }
}

handleSubmit=async(e)=>{
  e.preventDefault(e);
  let q=e.target.value.trim();
  console.log(q);
  if(!q) return false;
  console.log(`https://eu1.locationiq.com/v1/search.php?pk.81a25813b5280c170b107b4c3cd6c037&q=${q}&format=json`);
  const pokemonData = await axios.get(`${process.env.SEARCHURL}?key=${process.env.TOKEN}&q=${q}&format=json`);
  console.log(pokemonData);
}
  render(){
  return (  
    <div className="App">
     
    <>
    <Header />
         <>
        <Form >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter citiry" id="city"onChange={this.handleSubmit}/>
    </Form>
         </>

    <Footer />
    
    </>


    </div>
  );}
}

export default App;
