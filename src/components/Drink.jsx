import React, {Component} from "react";
import {Card, Button} from 'react-bootstrap'

class Drink extends Component {
    constructor(){
        super()
        this.state = {
            descr: "",
            name: "",
            img: "",
            glass:""
        }
        
    }

    componentDidMount(){
        setInterval(() => {
                fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                .then(response => response.json())
                .then(data => this.setState({name: data.drinks[0].strDrink, descr: data.drinks[0].strInstructionsIT, img:data.drinks[0].strDrinkThumb, glass:data.drinks[0].strGlass}))
        },(5*1000));
    }

    render(){

        if(this.state.name === ""){
            return(
                <>
                    <h1>Caricamento in corso...</h1>
                </>
            )
        } else {
            return(
                <>
                    <Card className="mt-4">
                        <Card.Header className="text-center">{this.state.name}</Card.Header>
                        <Card.Img variant="top" src={this.state.img}/>
                        <Card.Body>
                            <Card.Text>
                                <strong>Bicchiere</strong>: {this.state.glass}  
                            </Card.Text>
                            <Card.Text>
                                <strong>Descrizione</strong>: {this.state.descr}  
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </>
            );

        }

    }

}

export default Drink;