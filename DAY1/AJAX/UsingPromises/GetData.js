function GetData() {
  return new Promise(function (resolve, reject) {
    // AJAX Logic for fetching data
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.status === 200 && xmlHttpReq.readyState === 4) {
        resolve(xmlHttpReq.responseText);
      } else if (xmlHttpReq.status !== 200 && xmlHttpReq.readyState === 4) {
        reject("Error : " + xmlHttpReq.status);
      }
    };
    xmlHttpReq.send(); // actually places the async call
  });
}
