export function fakeRequest(data) {
  console.log('fake request with data: ', data); // eslint-disable-line no-console

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Uncomment below to trigger error:
      // return reject('Error: KABOOM!');

      resolve();
    }, 2e3);
  });
}
