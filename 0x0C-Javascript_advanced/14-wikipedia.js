function createElement(data) {
  let p = document.createElement("p");
  p.innerHTML = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  let url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  request.onload = function () {
    let data = JSON.parse(this.response);
    let page = data.query.pages;
    let pageId = Object.keys(page)[0];
    callback(page[pageId].extract);
  };
}

queryWikipedia(createElement);
