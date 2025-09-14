import { Fragment, useMemo } from 'react';
import { VersionConfig } from '../config/versions.config';

interface ReactIconProps {
  componentName: string;
  size?: number;
  versionConfig: VersionConfig;
}

const ReactIcon = ({ componentName, size = 140, versionConfig }: ReactIconProps) => {
  const Component = useMemo(() => {
    if (!versionConfig.isReactPage || !versionConfig.reactIconsPackage) {
      return null;
    }

    try {
      let icons;
      
      switch (versionConfig.version) {
        case '1.2.0':
          icons = require('@aws-icons/react_1.2.0');
          break;
        case '1.3.0':
          icons = require('@aws-icons/react_1.3.0');
          break;
        case '2.1.1':
          icons = require('@aws-icons/react_2.1.1');
          break;
        case '3.0.0':
          icons = require('@aws-icons/react_3.0.0');
          break;
        case '3.2.0':
          icons = require('@aws-icons/react_3.2.0');
          break;
        default:
          icons = require('@aws-icons/react_3.2.0');
      }
      
      const iconComponent = icons[componentName] || icons[versionConfig.defaultReactComponent || 'ArchitectureServiceAmazonAthena'];
      return iconComponent || versionConfig.defaultReactComponent;
      
    } catch (error) {
      console.warn(`Failed to load icon ${componentName} for version ${versionConfig.version}:`, error);
      return null;
    }
  }, [componentName, versionConfig]);

  if (!Component || typeof Component === 'string') {
    return null;
  }

  return (
    <Fragment>
      <Component size={size} />
    </Fragment>
  );
};

export default ReactIcon;