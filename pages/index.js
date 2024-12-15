import { ssrQueries, useUser, withApollo } from '@digify/theme-kit';
import AdminView from 'src/components/home/adminView';
import HomeView from 'src/components/home';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const Home = () => {
  const isDesktop = !useIsMobile();
  const { data } = useUser();
  const { userRole } = data;
  if (!isDesktop || (isDesktop && userRole !== 'manager')) return <HomeView />;
  return <AdminView />;
};

export default withApollo(Home)([
  ssrQueries.getProducts({ is_hot_offer: true }),
  ssrQueries.getBlogArticles()
]);
