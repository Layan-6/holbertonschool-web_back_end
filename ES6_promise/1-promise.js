export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve with success object
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      // Reject with error object
      reject(new Error('The fake API is not working currently'));
    }
  });
}
