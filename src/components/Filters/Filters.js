import React, {Component} from 'react';
import axios from 'axios';
import './Filters.css';


class Filters extends Component {
    state = {
        filters: []
    };


    handleChangeCheckbox = (value, index) => {
        let filtersList = this.state.filters;
        filtersList[index].value = value;

        this.setState({
            filters: filtersList
        })
    };

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            .then((res) => {
                this.setState({
                    filters: res.data.drinks.map(item => ({
                        name: item.strCategory,
                        value: true
                    }))
                }, () => {
                    this.props.onFilter(this.state.filters);
                });

            })
    }


    render() {
        const {filters} = this.state;

        return (
            <div className='filters'>
                {filters.map((item, index) => (
                    <div className="filter-item">
                        <input
                            type="checkbox"
                            checked={item.value}
                            onChange={(e) => this.handleChangeCheckbox(e.target.checked, index)}
                        />

                        {item.name}
                    </div>
                ))}

                <button onClick={() => this.props.onFilter(this.state.filters)}>apply</button>
            </div>
        )
    }
}

export default Filters;

