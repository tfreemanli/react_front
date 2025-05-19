import React, {Component} from 'react';

class Helloworld extends Component{

    clickMe(){
        alert("You click me from Class-based Helloworld.");
    }
    render(){
        return (
            <div>
                <p>HelloWorld in class component.</p>
            <p>Name: {this.props.name}</p>
            <p>Age: {this.props.age}</p>
                <input type="button" value="clickMe" onClick={()=>this.props.clickMe("Show Me")} />
                <input type="button" value="clickMe2" onClick={this.clickMe} />
            </div>
        );
    }
}
export default Helloworld;