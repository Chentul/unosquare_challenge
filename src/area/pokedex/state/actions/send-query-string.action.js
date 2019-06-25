import axios from 'axios';

export const sendQueryStringAction = (queryString: string, dispatch: function) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${queryString}`)
    .then((res) => {
      dispatch({
        type: 'SEND_QUERY_STRING',
        payload: res.data
      });
    })
    .catch((err) => err);
}