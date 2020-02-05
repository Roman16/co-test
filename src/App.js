import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Cocktails from "./components/Cocktails/Cocktails";

class App extends Component {
    state = {
        filterParams: []
    };

    handleFilter = (filter) => {
        this.setState({filterParams: filter})
    };

    render() {
        return (
            <div className="App">
                <Header/>

                <div className="row">
                    <Filters
                        onFilter={this.handleFilter}
                    />

                    <Cocktails
                        filter={this.state.filterParams}
                    />
                </div>
            </div>
        );
    }
}

export default App;
