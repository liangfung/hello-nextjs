## init next
- 约定在页面放在pages文件夹，文件名即为路由path
- **首屏server side render**，后续是 client side routing with `window-history-api`

## client side routing
使用next的`<Link>`标签可以实现前端路由(Navigate between pages)，用的是  `historyApi`, widnwo.history.xxx

## Dynamic with queryParams
- 在 `client side routing`的时候，使用`URL masking`的query string来传递参数实现动态页面
- 在 `server side routing`的时候，借助`express`做路由  

## server side navigation
express做路由，兼容 client side routing。因为客户端navigate的时候，用了`URL masking`。这样，在前端navigate的时候是没有问题的，但是reload的时候就有问题了，因为server side没有这样的路由，所以要配合兼容。（详见next官方文档）

## fetching data for pages
重点，敲黑板，`getInitialProps`