# 罗名扬 · AI Agent 开发工程师

18428029750 | luomingyang_design@163.com | 成都 | 离职 · 随时到岗

GitHub：https://github.com/luoluoluo22 | B站：https://space.bilibili.com/324272433

## 核心定位

专注 AI Agent、桌面自动化与工具调用，把自然语言指令接入本地软件和业务流程。具备企业产品相关工作经历，2024年11月起独立开发 AI 应用。

- Agent 工作流：自然语言理解、结构化任务、工具调用与执行结果回传。
- 桌面应用：Python / TypeScript / C#、Electron、.NET、Win32、MCP。
- 业务交付：AI 剪辑系统部署、企业自动化与技术顾问服务。

## 代表项目

- **剪映全自动剪辑 Skill**：让 Agent 完成素材导入、配音、字幕、特效与导出，支持草稿时间线生成与素材处理。https://github.com/luoluoluo22/jianying-editor-skill
- **燕子 Yanzi AI OS**：Windows 桌面 AI 宿主与小程序能力网络，支持本地工具调用和跨应用自动化。https://github.com/luoluoluo22/yanzi
- **剪艾 JianAI**：自然语言驱动的桌面视频剪辑产品，将指令转为结构化时间线操作。https://github.com/luoluoluo22/JianAI

## Agent 工作流作品

### DeepSeek 网页转 API

将 DeepSeek 网页对话封装为本地 OpenAI 兼容接口，供 AI 客户端和自动化工作流调用。

- WebView2 连接网页与本地 HTTP 服务
- 支持 /v1/chat/completions 与 SSE 流式回传
- 控制台管理服务状态、日志和启停

技术栈：C# · WebView2 · SSE

### Gemini / AIStudio 网页转 API

通过本地桌面动作提供 Gemini 网页能力的接口入口，连接模型调用与桌面工作流。

- 本地 HTTP 服务与 OpenAI 兼容请求入口
- WebView2 驱动网页交互
- 图片保存与缓存配置

技术栈：C# · WebView2 · HTTP

### 飞书收信 × CodexBridge

把飞书消息转给本机 Codex app-server，让聊天会话成为 Agent 的任务入口。

- 常驻 HTTP / WebSocket 桥接服务
- 按 chat_id 复用 thread，保留会话上下文
- 专用工作目录与结果回传 Skill

技术栈：PowerShell · Codex app-server

### 飞书传信

将桌面选中内容与剪贴板中的文本、图片、文件发送到指定飞书会话，作为工作流的交付出口。

- 自动判断文本、图片与文件类型
- 通过飞书机器人上传资源并发送消息
- 配置复用、执行日志与结果提示

技术栈：C# · 飞书 API

### Gemini AI 聊天动作

在桌面动作中接入 Gemini 对话，把剪贴板内容、提示词与历史上下文组织成连续调用。

- 未传入提示词时读取剪贴板
- 保存近期对话历史，支持连续交流
- 以 response 变量供后续动作使用

技术栈：C# · Roslyn · Gemini API

### 剪映 Skill 配套安装器

把剪映 Agent 所需的环境准备、依赖安装与 Skill 更新整合成桌面安装入口。

- 检测 Git、Python、FFmpeg 与依赖库
- 一键安装环境并克隆、更新 Skill 项目
- 进度、取消操作与诊断日志

技术栈：C# · WPF · Git

## 工作经历

### AI 应用开发与咨询（自由职业 / 创业）
2024.11—至今 | 成都

独立开发剪映 Skill、燕子与剪艾，实践桌面 Agent、模型接入与视频自动化，参与企业 AI 剪辑系统交付。

### 四川慧实通达集团有限公司
2021.03—2024.11 | 成都

参与企业产品相关工作与大型活动项目交付，对接业务需求及外部协作方，积累需求理解、跨团队沟通与落地经验。

### 四川云云车科技有限公司 · 云车宝
2020.04—2021.02 | 成都

参与汽车后市场平台产品相关工作，围绕 APP、线上活动与商户服务场景推进需求沟通和产品落地。

### 四川科库科技有限公司 · 优农帮
2019.07—2020.02

参与农资 ERP 产品相关工作、用户调研与活动策划，从用户反馈中理解业务流程与产品需求。

## 教育经历

成都理工大学 | 电子商务 · 本科 | 2013.09—2017.06

## 技能

AI Agent、MCP、Tool Calling、Prompt、Python、TypeScript、JavaScript、C#、Electron、.NET、Win32、WebView2、SSE、HTTP / WebSocket、飞书 API、FFmpeg、Git。
