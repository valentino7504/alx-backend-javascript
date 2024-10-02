/* eslint-disable no-unused-vars */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((res) => {
      const { status, body } = res;
      let user;
      createUser()
        .then((name) => {
          user = `${name.firstName} ${name.lastName}`;
          console.log(`${body} ${user}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}
