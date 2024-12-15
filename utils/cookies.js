import { serialize } from 'cookie';

/**
 * This sets `cookie` on `res` object
 */
const cookie = (res, list) => {
  const serializedList = list.map(item => {
    const {
      name: cloneName,
      value: cloneValue,
      options: { ...cloneOptions }
    } = item;
    if (!cloneOptions) cloneOptions = {};
    const stringValue =
      typeof cloneValue === 'object'
        ? 'j:' + JSON.stringify(cloneValue)
        : String(cloneValue);

    if ('maxAge' in cloneOptions) {
      cloneOptions.expires = new Date(Date.now() + cloneOptions.maxAge);
      cloneOptions.maxAge /= 1000;
    }
    return serialize(cloneName, String(stringValue), cloneOptions);
  });
  res.setHeader('Set-Cookie', serializedList);
};

/**
 * Adds `cookie` function on `res.cookie` to set cookies for response
 */
const cookies = handler => (req, res) => {
  res.cookie = list => cookie(res, list);

  return handler(req, res);
};

export default cookies;
