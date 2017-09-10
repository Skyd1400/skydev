import LocalService from './services/local';
import PrismicService from './services/prismic';

let service = process.env.DEV ? LocalService: PrismicService;

export const Service = service;