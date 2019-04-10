import api from "axios";

const Proxy = {
  sendRequest: function(httpVerb, url, data) {
    return api({
      url,
      headers: {
        "content-type": "application/json"
      },
      method: httpVerb,
      responseType: "json",
      data
    })
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        alert(error);
      });
  },
  get: function(path) {
    return this.sendRequest("GET", path);
  },
  post: function(path, data) {
    return this.sendRequest("POST", path, data);
  },
  patch: function(path, data) {
    return this.sendRequest("PATCH", path, data);
  },
  delete: function(path, data) {
    return this.sendRequest("DELETE", path, data);
  }
};

export default Proxy;
