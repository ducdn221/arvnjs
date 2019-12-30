import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '100$'
        }
    }

    changePrice(newPrice) {
        this.setState({
            price: newPrice
        });
    }

    render() {
        const style = {
            backgroundColor: '#f1f2f3',
            border: '1px solid blue',
            padding: '8px'
        };

        return (
            <div className="Person" style={style}>
                {/* pass reference */}
                <h1 onClick={this.changePrice.bind(this, '999$')}>{this.props.product.name}</h1>
                {/* execute immediately */}
                <h3 onClick={() => this.changePrice('999$')}>{this.state.price}</h3>
                <h3 onClick={this.props.getNewProducts}>{this.props.children}</h3>
            </div>
        )
    }
}

export default Product;
