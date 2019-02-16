import React, {Component} from 'react';
import Product from '../Product/Product'


class Dashboard extends Component {
    render() {
        return (
            <div>
                {this.props.inventory.map((e) => {
                    return (
                        <Product 
                        key={e.product_id} 
                        item={e} 
                        />
                    )
                })}
            </div>
        )
    }

}

export default Dashboard;