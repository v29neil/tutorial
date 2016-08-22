let _Utility = {};
let Utility = {

  post: function (url, data, header, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    // data = JSON.stringify(data);
    // }
    xhr.ontimeout = function () {
      cb(false);
    };
    xhr.timeout = 5000;

    xhr.onerror = function () {
      cb(false);
    };
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        cb(json);
      }
    };
    xhr.onloadend = function () {
      //console.log('onlload end post');
    };

  },

  get: function (url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.ontimeout = function () {
      console.log('timeout');
      cb(false);
    };
    xhr.onerror = function () {
      console.log('err');
      cb(false);
    };
    xhr.timeout = 5000;
    xhr.send();
    xhr.onreadystatechange = function () {
      // console.log(xhr.status)
      if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        cb(json)
      }
    };
    xhr.onloadend = function () {
      // done
      //console.log('onlload end get');
    };
  }
};
export default Utility;
