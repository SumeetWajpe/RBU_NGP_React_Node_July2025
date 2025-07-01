function GetData() {
  // AJAX Logic for fetching data
  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.status === 200 && xmlHttpReq.readyState === 4) {
      console.log(xmlHttpReq.responseText);
    }
  };
  xmlHttpReq.send(); // actually places the async call
}
