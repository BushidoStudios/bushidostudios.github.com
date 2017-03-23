import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', {path: '/'});
  this.route('about', {path: '/about'});
  this.route('services', {path: '/services'});
  this.route('contact', {path: '/contact'});
  this.route('404', {path: '*'});
});

export default Router;