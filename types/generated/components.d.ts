import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsChapterDropdown extends Schema.Component {
  collectionName: 'components_components_chapter_dropdowns';
  info: {
    displayName: 'Chapter dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    chapter: Attribute.Relation<
      'components.chapter-dropdown',
      'oneToOne',
      'api::chapter.chapter'
    >;
    lessons: Attribute.Relation<
      'components.chapter-dropdown',
      'oneToMany',
      'api::lesson.lesson'
    >;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    icon: 'feather';
    description: '';
  };
  attributes: {
    lesson: Attribute.Relation<
      'components.header',
      'oneToOne',
      'api::lesson.lesson'
    >;
  };
}

export interface ComponentsLessonSContent extends Schema.Component {
  collectionName: 'components_components_lesson_s_contents';
  info: {
    displayName: "Lesson's content";
    icon: 'file';
  };
  attributes: {
    lesson: Attribute.Relation<
      'components.lesson-s-content',
      'oneToOne',
      'api::lesson.lesson'
    >;
  };
}

export interface ComponentsNavigationButtons extends Schema.Component {
  collectionName: 'components_components_navigation_buttons';
  info: {
    displayName: 'Navigation buttons';
    icon: 'expand';
  };
  attributes: {};
}

export interface FormationsFormationCard extends Schema.Component {
  collectionName: 'components_formations_formation_cards';
  info: {
    displayName: 'Formation card';
    icon: 'expand';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    description: Attribute.Text;
    more: Attribute.Component<'menu.cta-button'>;
  };
}

export interface FormationsList extends Schema.Component {
  collectionName: 'components_formations_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    formation: Attribute.Component<'formations.formation-card', true>;
  };
}

export interface HeroHeroCover extends Schema.Component {
  collectionName: 'components_hero_hero_covers';
  info: {
    displayName: 'Hero cover';
    icon: 'crop';
  };
  attributes: {
    heroCover: Attribute.Media;
  };
}

export interface HeroHeroHeader extends Schema.Component {
  collectionName: 'components_hero_hero_headers';
  info: {
    displayName: 'Hero header';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.Component<'hero.hero-title'>;
    subtitle: Attribute.Component<'hero.hero-subtitle'>;
  };
}

export interface HeroHeroSubtitle extends Schema.Component {
  collectionName: 'components_hero_hero_subtitles';
  info: {
    displayName: 'Hero subtitle';
    icon: 'bold';
  };
  attributes: {
    subtitle: Attribute.Text;
  };
}

export interface HeroHeroTitle extends Schema.Component {
  collectionName: 'components_hero_hero_titles';
  info: {
    displayName: 'Hero title';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface MenuCtaButton extends Schema.Component {
  collectionName: 'components_menu_cta_buttons';
  info: {
    displayName: 'CTA button';
    icon: 'eye';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    type: Attribute.Enumeration<
      ['primary', 'secondary', 'outline-primary', 'outline-secondary']
    >;
  };
}

export interface MenuMenuCtAs extends Schema.Component {
  collectionName: 'components_menu_menu_ct_as';
  info: {
    displayName: 'Menu CTAs';
    icon: 'expand';
  };
  attributes: {
    Contact: Attribute.Component<'menu.cta-button'>;
    Enroll: Attribute.Component<'menu.cta-button'>;
  };
}

export interface MenuMenuDropdown extends Schema.Component {
  collectionName: 'components_menu_menu_dropdowns';
  info: {
    displayName: 'Menu dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    title: Attribute.String;
    formations: Attribute.Relation<
      'menu.menu-dropdown',
      'oneToMany',
      'api::formation.formation'
    >;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'Menu link';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.chapter-dropdown': ComponentsChapterDropdown;
      'components.header': ComponentsHeader;
      'components.lesson-s-content': ComponentsLessonSContent;
      'components.navigation-buttons': ComponentsNavigationButtons;
      'formations.formation-card': FormationsFormationCard;
      'formations.list': FormationsList;
      'hero.hero-cover': HeroHeroCover;
      'hero.hero-header': HeroHeroHeader;
      'hero.hero-subtitle': HeroHeroSubtitle;
      'hero.hero-title': HeroHeroTitle;
      'menu.cta-button': MenuCtaButton;
      'menu.menu-ct-as': MenuMenuCtAs;
      'menu.menu-dropdown': MenuMenuDropdown;
      'menu.menu-link': MenuMenuLink;
    }
  }
}
