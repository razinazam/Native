import Axios from "axios";
export const getdata = (value) => {
  return dispatch => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&type=video&key=AIzaSyB5woohTgRFgceCvQsi7kQkGIuf043tfRY&maxResults=20`
    )
      .then(resp => {

        dispatch({ type: "GET_DATA", payload: resp.data.items });
      })
      .catch(e => {
        console.log("error", e);
      });
  };
};
export const Like = (id) => {
  return (dispatch) => {
    Axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyB5woohTgRFgceCvQsi7kQkGIuf043tfRY`)
      .then((res) => {
        console.log("data", res.data);
        dispatch({ type: "CHANNEL_LIST", payload: res.data })
      }).catch((e) => {
        console.log(e);
      })
  }
}
export const ChanneId = (ChannId) => {
  return (dispatch) => {
    Axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${ChannId}&key=AIzaSyB5woohTgRFgceCvQsi7kQkGIuf043tfRY`)
      .then((resp) => {
        dispatch({ type: "Cahannel", payload: resp.data })
      })
      .catch((e) => {
        console.log(e);

      })
  }
}
