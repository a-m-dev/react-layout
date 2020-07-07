import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./SeriesPage'), {
  fallback: <LoadingIndicator />,
});
