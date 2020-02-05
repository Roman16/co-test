import React, {Component} from 'react';
import axios from 'axios';
import './Filters.css';


class Filters extends Component {
    state = {
        filters: []
    };


    handleChangeCheckbox = (value, name) => {
        console.log(name);
        this.setState({
            filters: this.state.filters.map(item => item.name === name ? {...item, value: value} : item)
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
                            value={item.name}
                            onChange={(e) => this.handleChangeCheckbox(e.target.checked, e.target.value)}
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

