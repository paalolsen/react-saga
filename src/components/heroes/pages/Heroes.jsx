import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchHeroes} from '../hero-actions';
import { heroSaga } from '../hero-saga';

const Heroes = () => {

  /*part of Redux pattern */
  const dispatch = useDispatch();
  const {heroes, hero, isLoading, error} = useSelector(state => state.heroReducer);


  useEffect(() => {
    dispatch(fetchHeroes());
  },[]);

  return(
    <div>
      <div>HEROES: </div>
      {heroes && heroes.map( h => (
        <div key={h.id}>{h.firstName}</div>
      ))}
    </div>
  );
}

export default Heroes;