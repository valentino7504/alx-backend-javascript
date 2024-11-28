async function getPaymentTokenFromAPI(success) {
  if (success) return { data: 'Successful response from the API' };
  return undefined;
}
module.exports = getPaymentTokenFromAPI;
