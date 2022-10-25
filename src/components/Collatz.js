import React, { Component } from 'react'

export default class Collatz extends Component {

    collatz = () => {
        var valor = this.props.num;
        var aux = valor + ", ";

        do {
            if( valor % 2 == 0) {
                valor = valor / 2;
            } else {
                valor = valor * 3 + 1;
            }
            aux += valor + ", ";
        } while (valor > 1);

        this.setState({
            texto : aux
        });
    }
    componentDidMount = () => {
        this.collatz();
    }
    componentDidUpdate = (oldProps) => {
        if(this.props.num != oldProps.num) {
            this.collatz();
        }
    }

    state = {
        texto : ""
    }

    render() {
        return (<div>
            <h1>Collatz</h1>
            <h2>{this.state.texto}</h2>
        </div>)
    }
}
