const apiHost = 'https://bakesaleforgood.com';

export default {
  async fetchInitialDeals() {
    let response = await fetch(apiHost + '/api/deals');
    let responseJson = await response.json();
    return responseJson;
  }
};