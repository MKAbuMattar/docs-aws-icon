export interface VersionConfig {
  version: string;
  reactIconsPackage?: string;
  defaultReactComponent?: string;
  isIconsPage?: boolean;
  isReactPage?: boolean;
}

export const VERSION_CONFIGS: Record<string, VersionConfig> = {
  // React Icons Versions
  'react_1.2.0': {
    version: '1.2.0',
    reactIconsPackage: '@aws-icons/react_1.2.0',
    defaultReactComponent: 'AmazonAthena',
    isReactPage: true,
  },
  'react_1.3.0': {
    version: '1.3.0',
    reactIconsPackage: '@aws-icons/react_1.3.0',
    defaultReactComponent: 'ArchitectureServiceAmazonAthena',
    isReactPage: true,
  },
  'react_2.1.1': {
    version: '2.1.1',
    reactIconsPackage: '@aws-icons/react_2.1.1',
    defaultReactComponent: 'ArchitectureServiceAmazonAthena',
    isReactPage: true,
  },
  'react_3.0.0': {
    version: '3.0.0',
    reactIconsPackage: '@aws-icons/react_3.0.0',
    defaultReactComponent: 'ArchitectureServiceAmazonAthena',
    isReactPage: true,
  },
  'react_3.2.0': {
    version: '3.2.0',
    reactIconsPackage: '@aws-icons/react_3.2.0',
    defaultReactComponent: 'ArchitectureServiceAmazonAthena',
    isReactPage: true,
  },
  'react_latest': {
    version: '3.2.0',
    reactIconsPackage: '@aws-icons/react_3.2.0',
    defaultReactComponent: 'ArchitectureServiceAmazonAthena',
    isReactPage: true,
  },
  // Icons Versions
  'icons_1.2.0': {
    version: '1.2.0',
    isIconsPage: true,
  },
  'icons_1.3.0': {
    version: '1.3.0',
    isIconsPage: true,
  },
  'icons_2.1.0': {
    version: '2.1.0',
    isIconsPage: true,
  },
  'icons_3.0.0': {
    version: '3.0.0',
    isIconsPage: true,
  },
  'icons_3.2.0': {
    version: '3.2.0',
    isIconsPage: true,
  },
  'icons_latest': {
    version: '3.2.0',
    isIconsPage: true,
  },
};