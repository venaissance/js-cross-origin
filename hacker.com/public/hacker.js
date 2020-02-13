// JSONP & 优化，封装成jsonp('url).then(f1, f2)
const jsonp = url => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const random = Math.random();
    // 定义一个回调函数拿数据，成功拿到数据后调用resolve
    window[random] = data => {
      resolve(data);
    };
    script.src = `${url}?callback=${random}`;
    document.body.appendChild(script); // script一加到页面就立马执行
    // 拿到数据立马移除js
    script.onload = () => {
      script.remove();
    };
    // 失败调用reject
    script.onerror = e => {
      reject(e);
    };
  });
};
// 调用
jsonp("http://qq.com:8888/qq.js").then(
  data => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
);

// CORS
const cors = () => {
  const req = new XMLHttpRequest();
  req.open("GET", "http://qq.com:8888/friends.json");
  req.onreadystatechange = () => {
    console.log(req.readyState);
    if (req.readyState === 4 && req.status === 200) {
      console.log(req.response);
      console.log("Request Succeed");
    }
  };
  req.send();
};

// cors()
