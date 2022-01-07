import React from "react";

class Search extends React.Component {

    state = {
        search: '',
        filter: 'all'
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.filter);
        }
    }

    handleChange = (event) => {
        this.setState(() => ({ [event.target.name]: event.target.value }),
            () => this.props.searchMovies(this.state.search, this.state.filter));
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        type="search"
                        className="validate"
                        placeholder="Поиск"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="btn search-btn indigo darken-1"
                        onClick={() => { this.props.searchMovies(this.state.search, this.state.filter) }}
                    > Поиск </button>
                    <div >
                        <p>
                            <label>
                                <input
                                    className="with-gap"
                                    name="filter"
                                    value="all"
                                    type="radio"
                                    onChange={this.handleChange}
                                    checked={this.state.filter === 'all'}
                                />
                                <span>Искать всё</span>
                            </label>

                            <label>
                                <input
                                    className="with-gap"
                                    name="filter"
                                    value="movie"
                                    type="radio"
                                    onChange={this.handleChange}
                                    checked={this.state.filter === 'movie'}
                                />
                                <span>Фильмы</span>
                            </label>

                            <label>
                                <input
                                    className="with-gap"
                                    name="filter"
                                    value="series"
                                    type="radio"
                                    onChange={this.handleChange}
                                    checked={this.state.filter === 'series'}
                                />
                                <span>Сериалы</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search }