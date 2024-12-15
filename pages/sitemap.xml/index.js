import { siteMap } from '@digify/theme-kit';
import * as cookie from 'cookie';
import themeConfig from 'utils/themeConfig';

function SiteMap() {
  return;
}

export async function getServerSideProps(ctx) {
  let _storeId = '';

  if (process.env.STORE_ID) _storeId = process.env.STORE_ID;
  else {
    if (ctx?.req?.headers?.['store-id'])
      _storeId = ctx?.req?.headers?.['store-id'];
    else {
      const cookies = cookie.parse(ctx.req.headers.cookie);
      _storeId = cookies?.storeId;
    }
  }

  const sitemapSting = await siteMap(_storeId, themeConfig);

  // we send the XML to the browser
  ctx.res.write(sitemapSting);
  ctx.res.end();

  return {
    props: {}
  };
}

export default SiteMap;
