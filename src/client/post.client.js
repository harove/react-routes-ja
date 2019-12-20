import axios from 'axios';
import { API_HOST } from './config';

const RESOURCE = 'post'


export const findAllPost = () => {
    return axios(`${API_HOST}/${RESOURCE}`); 
};