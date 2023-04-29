import * as AWSReactIcons from 'aws-react-icons';
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
