# js-cross-origin

### 使用方法

1. 安装 node-dev `yarn global add node-dev`

2. 下载代码 `git clone git@github.com:venaissance/js-cross-origin.git`

3. 进入 qq.com 运行 server.js `cd qq.com; node-dev server.js 8888`

4. 对于 hacker.com 同上，注意用不同端口启动server: `node-dev server.js 8888`

5. 设置 hosts
```
127.0.0.1 qq.com
127.0.0.1 hacker.com
```

6. 打开两个页面 `qq.com:8888/index.html` 和 `hacker.com:9999/index.html`

7. 记得做完之后，**删掉 hosts 里新增的两行**，否则 qq.com 无法正常访问！
