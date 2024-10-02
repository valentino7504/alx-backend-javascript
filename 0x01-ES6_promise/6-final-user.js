import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signProm = signUpUser(firstName, lastName);
  const uploadProm = uploadPhoto(fileName);
  return (
    Promise.allSettled([signProm, uploadProm])
      .then((promises) => {
        const result = JSON.parse(JSON.stringify(promises));
        // promises.forEach((res) => {
        //   if (res.status === 'fulfilled') result.push({ status: res.status, value: res.value });
        //   else result.push({ status: res.status, value: `${res.reason}` });
        // });
        result.map((res) => (res.status === 'fulfilled'
          ? { status: res.status, value: res.value }
          : { status: res.status, value: `${res.reason}` }));
        return result;
      })
  );
}
