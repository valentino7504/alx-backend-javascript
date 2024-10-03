import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = uploadPhoto();
    const user = createUser();
    return { photo, user };
  } catch (e) {
    return {};
  }
}
