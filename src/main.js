import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Main extends React.Component{
constructor(props){
    super(props);
}

render(){
    return (
        <>
        <img src={this.props.imgUrl} class="img-fluid" alt={this.props.errorImg}></img>
        <h4>{this.props.name}</h4>
         </>
    )
}

}

export default Main;