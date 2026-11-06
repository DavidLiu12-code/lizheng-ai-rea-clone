# 这份复刻是怎么做的（REA 路径）

本仓库是 [lizheng.ai](https://www.lizheng.ai/) 的**首页级学习对照**，不是官方站点，也不宣称 1:1 全站还原。

Evidence ID: `ev_39b92b0aad3fd58dac4a146c46d0369141fa7e261f06874c8d95ddc7aefa4e1c`

操作：`capture_browser_scenario`（Playwright / Chromium 139，受控回放，约 17068ms，458 条网络事件）

详见 [METHOD-REA.html](METHOD-REA.html)。

## 和「静态扫包手搓」的差别

对照方 https://davidliu12-code.github.io/lizheng-ai-clone/ 用 Vite+React+wouter+Tailwind 重新手写组件。这里回放 REA 捕获的水合 DOM + 编译 CSS + 字体/图片。

原站首页带 `data-ssr="true"`，首包已有章节骨架；但「别人在问什么」等卡片是水合后由 `/api/ask-lizheng/discovery/lists` 写入的。原站 JS 已捕获但未随仓库执行。
