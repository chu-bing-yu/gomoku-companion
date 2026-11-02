# 五子棋（Roche 插件）

插件 id：`gomoku-companion` · App id：`gomoku-home` · 当前版本：0.2.0

在聊天 `+` 面板里和角色下一盘 15×15 五子棋。棋局在弹框里进行，同时以一张卡片留在主聊天里。

## 安装 / 更新

在 Roche 里打开「设置 → 插件 App 管理」，填这个链接：

```
https://raw.githubusercontent.com/chu-bing-yu/gomoku-companion/main/manifest.json
```

## 玩法

1. 打开任意单聊或群聊，点输入框旁的 `+`，选「五子棋」。
2. 选对手（群聊可选成员）、棋力、先后手，开始对局。
3. 落子由本地引擎计算，**不产生任何 AI 请求**。
4. 想让他说话：在弹框下方输入一句，或直接回主聊天里说。主聊天会读到当前局面。
5. 棋局结束会写回同一张卡片；关掉弹框后从卡片还能继续看/再来一局。

## 外观自定义（App 内「外观」区）

- **主题**：跟随系统 / 白天 / 夜晚。白天是纯白页面，夜晚是深色页面，弹框与卡片同步切换。
- **卡片风格**：木质 / 素白 / 墨色，只影响聊天卡片底色与描边。
- **主色**：海蓝 / 竹青 / 陶土 / 雾紫 / 石墨，作用于按钮、状态点、气泡与焦点环。
- 设置即时生效，下方有真实卡片预览；改动会写进 `gmk:settings`，下次打开沿用。

## 设计说明

- 棋力三档：温柔 / 认真 / 不放水，全部是本地启发式评分，成五必下、被成五必堵。
- 默认静默：落子不点评、不调用模型，避免每手棋都烧 token。
- 主动调用才回复：弹框里的“说”走一次 `roche.ai.chat`，提示词只包含角色 persona 原文 + 一句局面事实。
- 主聊天联动：插件的 `contextProvider` 只在有对局时注入一行局面摘要，人设、世界书、记忆全部由宿主原有提示词负责，插件不重写人设。
- 卸载插件会清掉 `roche.storage` 里的棋局与战绩；不会写 Roche 主记忆。

## 数据存储

全部走 `roche.storage`，键前缀 `gmk:`：

| key | 内容 |
| --- | --- |
| `gmk:games` | 每个会话一局（`conversationId` → 对局快照） |
| `gmk:stats` | 胜 / 负 / 和 |
| `gmk:settings` | 默认棋力 + 主题 / 卡片风格 / 主色 |

## 开发

```bash
npm install
npm run build     # 产出单文件 plugin.js
npm test          # 纯逻辑单测（node:test）
npm run e2e       # 无头 Edge 跑真实界面（需先 build）
npm run deploy    # 发布到 GitHub raw（GITHUB_TOKEN 走环境变量）
```

本地预览：`npm run build` 后直接打开 `dev/preview.html`。

目录：

```
src/core/      纯逻辑（棋盘、胜负、引擎、对局状态机、文案），无 DOM、无 roche
src/services/  host.js 是全项目唯一出现 roche.* 的文件；store.js 管 storage
src/ui/        弹框、对局视图、棋盘 SVG、独立 App 页面、样式
src/chat/      聊天卡片与 + 面板入口
```
