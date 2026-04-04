export default function handleResponseFromAPI(promise) {
  // Add handlers to the promise
  return promise
    .then(() => {
      // When promise resolves
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(() => {
      // When promise rejects
      return new Error();
    });
}
