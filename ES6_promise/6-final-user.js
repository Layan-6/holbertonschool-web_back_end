import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Call both functions to get their promises
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);
  
  // Use Promise.allSettled to wait for both promises to settle
  const results = await Promise.allSettled([signUpPromise, uploadPromise]);
  
  // Map the results to the required format
  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason
  }));
}
