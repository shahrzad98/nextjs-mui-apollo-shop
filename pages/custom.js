/**
 * Please don't change this file
 * !!! Experimental logic of customization
 */
import {
  DynamicComponentsContainer,
  ssrQueries,
  useCustomization,
  withApollo
} from '@digify/theme-kit';

const Custom = () => {
  const {
    data: { home }
  } = useCustomization('home');

  return null;

  return <DynamicComponentsContainer schema={home.sections} />;
};

export default withApollo(Custom)([ssrQueries.getProfile()]);
