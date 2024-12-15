import cookies from 'utils/cookies';

async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      res.cookie([
        {
          name: 'n_access',
          value: '',
          options: {
            httpOnly: true,
            sameSite: 'strict',
            secure: !req.headers.host.includes('localhost'),
            domain: '',
            path: '/',
            maxAge: -60000
          }
        }
      ]);

      res.status(200).json({
        success: `Response Store ${req.headers.storeid} >>> Done`
      });
    } else {
      res.status(403).json({ error: 'This method is not exist!' });
    }
  } catch (error) {
    res.status(403).json({ error });
  }
}

export default cookies(handler);
