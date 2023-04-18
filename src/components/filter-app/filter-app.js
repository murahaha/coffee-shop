import { Component } from "react";
import "./filter-app.css";


class AppFilter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            buttonsData : [
                {name: 'Brazil', label: 'Brazil'},
                {name: 'Kenya', label: 'Kenya'},
                {name: 'Columbia', label: 'Columbia'},
                {name: 'All', label: 'All'},
            ],
            term: this.props.term
        }
    }
    

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        const {filterBy, findIndex} = this.props;
        const btnActive = "btn btn-light";
        const btnDisactive = "btn btn-outline-light";
        const buttons = this.state.buttonsData.map(({name, label}) => {
            const active = findIndex === name;
            const activeClass = active ? btnActive : btnDisactive;
            return (
                    <button type="button"
                            className={activeClass}
                            key={name}
                            onClick={() => filterBy(name)}>
                            {label}
                    </button>
                    )
        });
        return (
            <div className="btn-group">
            <div className="filter-title">Looking for</div>
                <input 
                    type="text"
                    className="search-panel"
                    placeholder="start typing here..."
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
                    <div className="filter-title">Or filter</div>
                {buttons}
            </div>
        ) 
    }
    }
export default AppFilter;