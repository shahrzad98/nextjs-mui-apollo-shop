export async function getAddressNeshan(lat, lng) {
  try {
    const res = await fetch(
      `https://api.neshan.org/v4/reverse?lat=${lat}&lng=${lng}`,
      {
        headers: {
          'Api-Key': 'service.5YhEZldGdTDa1l7F3U9wOkFkmjztKXGsMRyiD8nS'
        }
      }
    );

    return await res.json();
  } catch (e) {
    if (e.response) return e.response;

    return { data: { error: e } };
  }
}

export async function searchAddressNeshan(
  lat = '35.6000892',
  lng = '51.389000',
  trem = ''
) {
  try {
    const jsonRes = await fetch(
      `https://api.neshan.org/v1/search?term=${trem}&lat=${lat}&lng=${lng}`,
      {
        headers: {
          'Api-Key': 'service.5YhEZldGdTDa1l7F3U9wOkFkmjztKXGsMRyiD8nS'
        }
      }
    );
    const res = await jsonRes.json();
    return res;
  } catch (e) {
    if (e.response) return e.response;
    return { data: { error: e } };
  }
}
