import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto('example.jpg');
    const userResponse = await createUser('John', 'Doe');

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
