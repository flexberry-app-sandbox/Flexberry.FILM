import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFILMКинотеатрLForm from './forms/i-i-s-f-i-l-m-кинотеатр-l';
import IISFILMСеансыLForm from './forms/i-i-s-f-i-l-m-сеансы-l';
import IISFILMФильмыLForm from './forms/i-i-s-f-i-l-m-фильмы-l';
import IISFILMКинотеатрEForm from './forms/i-i-s-f-i-l-m-кинотеатр-e';
import IISFILMСеансыEForm from './forms/i-i-s-f-i-l-m-сеансы-e';
import IISFILMФильмыEForm from './forms/i-i-s-f-i-l-m-фильмы-e';
import IISFILMКинотеатрModel from './models/i-i-s-f-i-l-m-кинотеатр';
import IISFILMСеансыModel from './models/i-i-s-f-i-l-m-сеансы';
import IISFILMФильмыModel from './models/i-i-s-f-i-l-m-фильмы';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-f-i-l-m-кинотеатр': IISFILMКинотеатрModel,
    'i-i-s-f-i-l-m-сеансы': IISFILMСеансыModel,
    'i-i-s-f-i-l-m-фильмы': IISFILMФильмыModel
  },

  'application-name': 'FILM',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'FILM',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'FILM',
          title: 'FILM'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'ф-и-л-ь-м': {
          caption: 'ФИЛЬМ',
          title: 'ФИЛЬМ',
          'i-i-s-f-i-l-m-кинотеатр-l': {
            caption: 'Кинотеатр',
            title: ''
          },
          'i-i-s-f-i-l-m-фильмы-l': {
            caption: 'Фильмы',
            title: ''
          },
          'i-i-s-f-i-l-m-сеансы-l': {
            caption: 'Сеансы',
            title: ''
          }
        },
        'с-п-р-а-в-о-ч-н-и-к-и': {
          caption: 'СПРАВОЧНИКИ',
          title: 'СПРАВОЧНИКИ',
          'i-i-s-f-i-l-m-сеансы-l': {
            caption: 'СеансыL',
            title: 'Сеансы'
          },
          'i-i-s-f-i-l-m-кинотеатр-l': {
            caption: 'КинотеатрL',
            title: 'Кинотеатр'
          },
          'i-i-s-f-i-l-m-фильмы-l': {
            caption: 'ФильмыL',
            title: 'Фильмы'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-f-i-l-m-кинотеатр-l': IISFILMКинотеатрLForm,
    'i-i-s-f-i-l-m-сеансы-l': IISFILMСеансыLForm,
    'i-i-s-f-i-l-m-фильмы-l': IISFILMФильмыLForm,
    'i-i-s-f-i-l-m-кинотеатр-e': IISFILMКинотеатрEForm,
    'i-i-s-f-i-l-m-сеансы-e': IISFILMСеансыEForm,
    'i-i-s-f-i-l-m-фильмы-e': IISFILMФильмыEForm
  },

});

export default translations;
