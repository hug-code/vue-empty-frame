# vue-empty-site

#### 介绍
vue项目开箱即用的框架，包括ant-design的后台框架、vant的h5框架，开箱即用

#### 目录结构
```
admin-ant.design   后台管理-pc
mobile-vant        移动端-h5
tool               常用方法
```


### Nginx配置
```shell
server {
    listen       80;
    server_name  localhost;
    root         /home/wwwroot/web;
    index        index.html;
    
    # 路由设置为 history 需要配置，否则子页刷新404
    location / {
        try_files $uri $uri/ /index.html;
    }

    # access_log  /home/logs/nginx/localhost.log;
}
```


