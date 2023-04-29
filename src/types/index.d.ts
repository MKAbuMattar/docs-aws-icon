import type { Language } from 'react-highlight-syntax';

export interface IconsPageMainDaum {
  name: string;
  icon: string;
  importIcon: ImportIcon;
  categorys: string[];
}

export interface ImportIcon {
  CDN: Cdn;
  NPM: Npm;
}

export interface Cdn {
  jsdelivr: string;
  unpkg: string;
}

export interface Npm {
  npm: string;
}

type PropsIconsPageMain = {
  icons?: IconsPageMainDaum[];
  language?: Language;
};

export interface ReactPageMainDaum {
  name: string;
  component: string;
  importComponent: string;
  categorys: string[];
}

type PropsReactPageMain = {
  icons?: ReactPageMainDaum[];
  language?: Language;
};
