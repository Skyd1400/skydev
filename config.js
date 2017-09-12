import LocalService from './services/local';
import PrismicService from './services/prismic';

let service = process.env.NODE_ENV !== 'production' ? LocalService: PrismicService;

export const Service = service;