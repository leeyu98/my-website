# 长念的小站

<img width="100" src="./static/img/logo.png" />


本站是基于 [Docusaurus 2](https://docusaurus.io/) 构建的个人博客。


## 安装

```bash
$ yarn
```


## 本地开发

该命令用于启动本地服务器，并自动打开浏览器，大部分更改会实时更新且无须重启服务器。

```bash
$ yarn start
```

## 构建

该命令用于生成静态资源到 `build` 目录下，并且可以直接部署静态资源到服务器上。

```bash
$ yarn build
```


## 部署

### 1. GitHub Pages

该命令可以更方便地将静态资源部署到 GitHub Pages 并推送到 `gh-pages` 分支。

使用 SSH:

```bash
$ USE_SSH=true yarn deploy
```

不使用 SSH:

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

### 2. Netlify
Netlify 提供 Docusaurus 部署模版。

### 3. Vercel

> 缺点：国内无法访问。

Vercel 提供 Docusaurus 部署模版。