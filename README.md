# 基于parcel的react全家桶

## parcel简介
[Parcel](https://parceljs.org/) 是 Web 应用打包工具，适用于经验不同的开发者。它利用多核处理提供了极快的速度，并且不需要任何配置。相比webpack,parcel更加容易上手.同等功能使用webpack,配置代码至少需要100多行,而parcel内部集成了很多插件,更容易上手~
打包速度对比

| Bundler                 | Time      |
| ----------------------- | --------- |
| browserify              | 22.98s    |
| webpack                 | 20.71s    |
| **parcel**              | **9.98s** |
| **parcel - with cache** | **2.64s** |

## react全家桶
| 项目                | 版本      |
| ------------------ | --------- |
| react              | v16.2.0   |
| react-router       | v4.2.2    |
| redux              | v3.7.2    |
| superagent         | v3.8.2    |
上面只列举部分..都是新建项目时最新的包..其他请查看package.json

## 使用方法
```
git clone
npm insatll
npm run dev
localhost:1234
```
