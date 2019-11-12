import React, { useState } from 'react';
import {Route, Link} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
    return ( <div classname="app">
    <div>
      <SavedList list={savedList} />
      <div>
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => (
          <Movie {...props} movieCard={MovieCard} /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
        )}
      />
      </div>
    </div>
    </div>
    
);
        }

export default App;
