# O2OA Web

[![Build Status](https://travis-ci.com/huqi1980/o2oa_client_web.svg?branch=master)](https://travis-ci.org/huqi1980/o2oa_client_web)
[![codecov](https://codecov.io/gh/huqi1980/o2oa_client_web/branch/master/graph/badge.svg)](https://codecov.io/gh/huqi1980/o2oa_client_web)
[![AGPL](https://img.shields.io/badge/license-AGPL-blue.svg)](https://github.com/huqi1980/o2oa_client_web)
[![code-size](https://img.shields.io/github/languages/code-size/badges/shields.svg)](https://github.com/huqi1980/o2oa_client_web)
[![last-commit](https://img.shields.io/github/last-commit/google/skia.svg)](https://github.com/huqi1980/o2oa_client_web)
---
O2OA
==========
## 简介
O2OA 是一套现代企业级的办公平台。有以下特点\:

1. 核心代码开源

2. 全功能免费

3. 私有化部署，下载软件后可以安装在自己的服务器上

4. 随时随地办公，平台支持兼容HTML5的浏览器，并且开发了源生的IOS/Android应用

5. 高可扩展性，用户通过简单的学习后，可以自定义配置门户、流程应用、内容管理应用

更多的产品介绍、使用说明、下载、在线体验、API及讨论请移步至[http://o2oa.io/](http://www.o2oa.io/)

![o2oa](http://muliba.u.qiniudn.com/post/20180801-225850@2x.png)


## 官方网站\:
项目主页 : https://www.oschina.net/p/o2oa
下载地址 : http://www.o2oa.io

## 最新版本\:
## v4 build 11.02更新内容\:
新增功能\:

1、[内容管理]增加设计元素可以拷贝粘贴的功能。

2、[内容管理]增加组合框、子表单等设计元素组件。

3、[企业社区]增加导航浏览模式。

4、[服务管理]增加设计元素可以拷贝粘贴的功能。

更新优化\:

1、可以在配置中选择是否对office，pdf，text，image进行切词索引。

2、优化调整切词索引中对词性的判断。

3、优化钉钉,企业微信,政务钉钉中由于反复获取accessToken导致的页面响应缓慢的问题。

BUG修复\:

1、[内容管理]视图的分类标题无法保存的问题。

2、[内容管理]修复附件无法替换的问题。

3、修正office格式引起的:NoSuchMethodException: org.openxmlformats.schemas.wordprocessingml.x2006.main.impl.CTPictureBaseImpl"。


## v4 build 11.01更新内容\:
新增功能\:

1、企业微信，钉钉，政务钉钉组织同步，待办消息推送，通知消息群发，移动设备页面集成。

2、新增SqlServer支持，目前可以支持一下数据库：Oracle，DB2，MySQL，Postgresql，Informix，H2(内嵌)，DM（达梦国产数据库），MS-SQLServer。

3、OAuth2客户端功能优化，支持浙江CA，微信，QQ等其他OAuth认证服务。

4、增加消息群发功能。

5、ISO，AndroidApp端增加语音处理功能。

6、ISO，AndroidApp端增加AI自动处理功能。

7、启用新域名o2oa.net。

8、增加登录页面定制功能，现在可以通过门户定制登录页面了。

更新优化\:

1、支持金山WPS。

2、统计中数据量导致的新能下降。

3、群组(Group)支持组织成员，可以统一翻译成人员。

4、增加个人的主身份设置，当不指名身份时可以自动取到主身份。

5、用户可以自行绑定微信,通过微信扫码登录。

6、[信息管理]对信息文档查询效率源码级优化。

BUG修复\:

1、会议管理字段超长导致的错误。

2、无标题流程消息提醒显示空字符串。

3、脚本编辑器在同时打开多个窗口情况无法正常保存。

4、修改组织同步触发机制，现在可以通过cron表达式定制运行时间。

5、[信息管理]修复数据字典无法复制的问题以及分类显示的错误。

6、Office控件代码修正。


## v4 build 09.21更新内容\:
新增功能\:

1、增加手写签批功能，支持在线手写签批，录音。

2、增加全文搜索功能。支持pdf，.doc，.docx，.ppt，.pptx，.xls，.xlsx内容的全文检索。

3、OAuth客户端功能，支持微信等其他OAuth认证服务。

4、[汇报管理]添加手工漏发检测功能。

更新优化\:

1、更新统计展现功能，支持饼图，柱状图，折线图，支持行列转换。

2、统计功能，可以源于不同试图的列进行合并统计。

3、优化日程管理提醒不及时的问题

BUG修复\:

1、流程重置处理人错误。

2、[信息管理]修复数据型文档类型保存不正确的问题。

3、[脑图]修复某些情况下脑图无法创建的问题。



## v4 build 09.04更新内容\:
新增功能\:

1、电子签章支持。

2、流程引擎增加定时节点。

3、政务钉钉支持，可以同步政务钉钉的人员，组织。

4、增加行政区划组件。

5、[社区应用]添加调整主贴版块的服务。

更新优化\:

1、视图统计代码优化，提升统计查询效率。

2、优化待办已办查询，TaskCompleted 增加 latest。

3、流程引擎底层优化，修改PorcessPlatform实现的aeiObjects。

BUG修复\:

1、应用导入导出错误。

2、[信息管理]修复CMS_Review自动同步更新的问题

3、[信息管理]修复序列保存时为空的问题

4、修正移动端APP信息管理会把数据类的信息读取出来的问题

## 授权协议

o2oa软件遵守双重协议，一个是AGPL授权协议，一个是商用授权协议。

1、o2oa是开源软件，您可以修改源码及免费使用；这时需遵守AGPL协议。

2、当使用者使用o2oa软件提供收费服务，或者对o2oa进行分发、销售时需进行商业授权。具体请查看：[http://www.o2oa.io/product.html](http://www.o2oa.io/product.html)。

3、使用者下载本软件即表示愿遵守此项协议。

