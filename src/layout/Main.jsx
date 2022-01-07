import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {

    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                 movies: data.Search,
                  loading: false 
            })
            .catch((err) => {
                console.log(err);
                this.setState({loading: false})
            })
        );
    }

    searchMovies = (str, filter='all') => {
        this.setState({loading: true});
        let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${filter === 'all' ? '' :`&type=${filter}`}`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ 
                movies: data.Search, 
                loading: false 
            })
        );
    }

    render() {
        const { movies, loading } = this.state;
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                {
                    !loading ? (
                        <Movies movies={movies} />
                    ) : <Preloader />
                }
            </main>
        );
    }
}

export { Main };