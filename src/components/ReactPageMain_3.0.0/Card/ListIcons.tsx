import * as AWSReactIcons from '@aws-icons/react_3.0.0';
import { Fragment } from 'react';

const ListIcons = ({ componentName }) => {
  const Component =
    AWSReactIcons[componentName || 'ArchitectureServiceAmazonAthena'] ||
    'ArchitectureServiceAmazonAthena';

  return (
    <Fragment>
      <Component size={140} />
    </Fragment>
  );
};

export default ListIcons;
