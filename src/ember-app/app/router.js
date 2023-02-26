import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-f-i-l-m-кинотеатр-l');
  this.route('i-i-s-f-i-l-m-кинотеатр-e',
  { path: 'i-i-s-f-i-l-m-кинотеатр-e/:id' });
  this.route('i-i-s-f-i-l-m-кинотеатр-e.new',
  { path: 'i-i-s-f-i-l-m-кинотеатр-e/new' });
  this.route('i-i-s-f-i-l-m-сеансы-l');
  this.route('i-i-s-f-i-l-m-сеансы-e',
  { path: 'i-i-s-f-i-l-m-сеансы-e/:id' });
  this.route('i-i-s-f-i-l-m-сеансы-e.new',
  { path: 'i-i-s-f-i-l-m-сеансы-e/new' });
  this.route('i-i-s-f-i-l-m-фильмы-l');
  this.route('i-i-s-f-i-l-m-фильмы-e',
  { path: 'i-i-s-f-i-l-m-фильмы-e/:id' });
  this.route('i-i-s-f-i-l-m-фильмы-e.new',
  { path: 'i-i-s-f-i-l-m-фильмы-e/new' });
});

export default Router;
