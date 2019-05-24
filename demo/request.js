export function fakeRequest(data) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Uncomment below to trigger error:
      // return reject('Error: KABOOM!');

      resolve({
        status: 'ok',
        scheduled: data
      });
    }, 2e3);
  });
}
