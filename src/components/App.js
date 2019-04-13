import React, {Component} from 'react'
import ProductList from './ProductList'
import Index from './SortingSelect'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            sortingType: ''
        };
    }

    componentDidMount() {
        this.loadData();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.sortingType === '' || this.state.sortingType !== nextState.sortingType;
    }

    render() {
        return (
            <div className="container">
                <Index updateData={this.updateData}/>
                <ProductList
                    products={this.state.products}
                    sortingType={this.state.sortingType}
                />
            </div>
        )
    }

    loadData() {
        fetch('../products.json')
            .then(response => response.json())
            .then(data => this.setState({ products: data }))
            .catch((e) => console.log(`Product List can't be loaded:` + e));
    }

    updateData = (selectedOption) => {this.setState({ sortingType: selectedOption.value })}
}
export default App