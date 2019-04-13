import React, {Component} from 'react'
import './style.css'

class Index extends Component {

    render(){
        const {product} = this.props;
        let classNameByType='';
        switch (product.type) {
            case 'sale':
                classNameByType = 'badge-danger';
                break;
            case 'promo':
                classNameByType = 'badge-warning';
                break;
            case 'recommended':
                classNameByType = 'badge-info';
                break;
            default:
                classNameByType = 'badge-success';
                break;
        }
        return (
            <div className="product">
                <img src={"media/products/"+ product.pic} alt="" className="product__img"/>
                <p className="product__description">{product.name}</p>
                <p className="product__price">Цена: {product.price}</p>
                <span className={"product__type badge "+ classNameByType}>{product.type}</span>
            </div>
        )
    }
}

export default Index