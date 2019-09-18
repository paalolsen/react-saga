import React from 'react';
import {Router, Redirect} from '@reach/router';

import Heroes from '../components/heroes/pages/Heroes';
import EditHeroes from '../components/heroes/pages/EditHeroes';
import Villains from '../components/villains/pages/Villains';
import EditVillains from '../components/villains/pages/EditVillains';

const RootRouter = () => (
  <Router>
    <Redirect from="/" to="heroes" noThrow />
    <Heroes path="heroes" />
    <EditHeroes path="edit-hero/:id" />
    <Villains path="villains" />
    <EditVillains path="edit-villains/:id" />
  </Router>
)

export default RootRouter;