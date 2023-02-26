import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'FILM',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'FILM',
          title: 'FILM'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
