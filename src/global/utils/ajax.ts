export const ajax = (method: string, url: string, data: string | FormData | Blob, headers: HeadersInit) => {
  // var xhr = new XMLHttpRequest();
  // xhr.open(method, url);

  // // Set request header
  // for (let key in header) {
  //   xhr.setRequestHeader(key, header[key]);
  // }

  // // Send the request
  // xhr.send(data);

  return fetch(url, {
    method: method,
    body: data,
    headers: headers
  });
 };
