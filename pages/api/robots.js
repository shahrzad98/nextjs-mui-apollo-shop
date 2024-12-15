export default function handler(req, res) {
  res.send(`User-agent: *
Allow: /
Disallow: /information/about-us
Disallow: /404/
Disallow: /*login

#SiteMap
Sitemap: https://www.${req.headers.host}/sitemap.xml
    `); // Send your `robots.txt content here
}
