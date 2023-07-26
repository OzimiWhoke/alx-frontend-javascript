import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`body ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}

handleProfileSignup();
