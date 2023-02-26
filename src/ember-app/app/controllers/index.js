import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ф-и-л-ь-м.caption'),
          title: i18n.t('forms.application.sitemap.ф-и-л-ь-м.title'),
          children: [{
            link: 'i-i-s-f-i-l-m-кинотеатр-l',
            caption: i18n.t('forms.application.sitemap.ф-и-л-ь-м.i-i-s-f-i-l-m-кинотеатр-l.caption'),
            title: i18n.t('forms.application.sitemap.ф-и-л-ь-м.i-i-s-f-i-l-m-кинотеатр-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-f-i-l-m-фильмы-l',
            caption: i18n.t('forms.application.sitemap.ф-и-л-ь-м.i-i-s-f-i-l-m-фильмы-l.caption'),
            title: i18n.t('forms.application.sitemap.ф-и-л-ь-м.i-i-s-f-i-l-m-фильмы-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-f-i-l-m-сеансы-l',
            caption: i18n.t('forms.application.sitemap.ф-и-л-ь-м.i-i-s-f-i-l-m-сеансы-l.caption'),
            title: i18n.t('forms.application.sitemap.ф-и-л-ь-м.i-i-s-f-i-l-m-сеансы-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.с-п-р-а-в-о-ч-н-и-к-и.caption'),
          title: i18n.t('forms.application.sitemap.с-п-р-а-в-о-ч-н-и-к-и.title'),
          children: [{
            link: 'i-i-s-f-i-l-m-сеансы-l',
            caption: i18n.t('forms.application.sitemap.с-п-р-а-в-о-ч-н-и-к-и.i-i-s-f-i-l-m-сеансы-l.caption'),
            title: i18n.t('forms.application.sitemap.с-п-р-а-в-о-ч-н-и-к-и.i-i-s-f-i-l-m-сеансы-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-f-i-l-m-кинотеатр-l',
            caption: i18n.t('forms.application.sitemap.с-п-р-а-в-о-ч-н-и-к-и.i-i-s-f-i-l-m-кинотеатр-l.caption'),
            title: i18n.t('forms.application.sitemap.с-п-р-а-в-о-ч-н-и-к-и.i-i-s-f-i-l-m-кинотеатр-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-f-i-l-m-фильмы-l',
            caption: i18n.t('forms.application.sitemap.с-п-р-а-в-о-ч-н-и-к-и.i-i-s-f-i-l-m-фильмы-l.caption'),
            title: i18n.t('forms.application.sitemap.с-п-р-а-в-о-ч-н-и-к-и.i-i-s-f-i-l-m-фильмы-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})