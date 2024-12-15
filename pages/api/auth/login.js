import cookies from 'utils/cookies';

async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      if (!req.body) res.status(403).json({ error: 'body does not exist' });
      else if (!req.body?.access)
        res.status(403).json({ error: 'token does not exist' });
      else {
        res.cookie([
          {
            name: 'n_access',
            value: req.body?.access,
            options: {
              httpOnly: true,
              sameSite: 'strict',
              secure: !req.headers.host.includes('localhost'),
              domain: '',
              path: '/',
              maxAge: 10800000
            }
          }
        ]);

        res.status(200).json({
          success: `Response Store ${req.headers.storeid} >>> Done`
        });
      }
    } else {
      res.status(403).json({ error: 'This method is not exist!' });
    }
  } catch (error) {
    res.status(403).json({ error });
  }
}

export default cookies(handler);
