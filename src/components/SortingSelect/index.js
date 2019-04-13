import React from 'react'
import Select from 'react-select'
import './style.css'

const options = [
    { value: 'title', label: 'названию' },
    { value: 'price', label: 'цене' },
    { value: 'categories', label: 'категории' }
];

class Index extends React.Component {
    state = {
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption});
        //передача родителю выбранного типа сортировки
        this.props.updateData(selectedOption);
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                placeholder={'Сортировать по..'}
                className={'sorting-select'}
            />
        );
    }
}
export default Index