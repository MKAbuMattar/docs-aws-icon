import * as AWSReactIcons from '@aws-icons/react_1.2.0';
import { Fragment } from 'react';

const ListIcons = ({ componentName }) => {
  const Component = AWSReactIcons[componentName || 'AmazonAthena'];

  return (
    <Fragment>
      <Component size={140} />
    </Fragment>
  );
};

export default ListIcons;
