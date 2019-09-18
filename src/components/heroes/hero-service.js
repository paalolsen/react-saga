import http from '../common/http-service';
import {BaseUrl} from '../common/api-config';

export const getHeroes = async () => {
  return await http.get(BaseUrl.heroes);
}

export const getVillains = async () => {
  return await http.get(BaseUrl.villains);
}

