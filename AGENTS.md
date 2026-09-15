# AGENTS.md — China DocAI 2026 官网

> 本文件供后续 Agent / 协作者快速理解项目。修改项目前请先阅读本文件。

---

## 1. 项目定位

一个**纯前端、静态、单页**的学术会议官网，用于展示 China DocAI 2026 的征稿通知、会议信息、组委会、日程、投稿指南等。

- 无后端、无 API、无动态路由。
- 所有文案集中在 `src/data/conference.en.ts`，通过 `ConferenceContent` 类型驱动页面。
- 当前为**纯英文版**（已删除中文数据与语言切换）。

---

## 2. 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | React 19 + TypeScript（strict） |
| 构建 | Vite 6 |
| 样式 | CSS Modules + 全局设计变量 |
| 包管理 | npm（`package.json` 已配置 `"type": "module"`） |
| 部署 | `dist/` 为构建产物，可部署到任意静态托管 |

---

## 3. 目录结构

```
doc-ai-web/
├── index.html                 # 入口 HTML，lang="en"
├── package.json
├── vite.config.ts             # 仅 @vitejs/plugin-react
├── tsconfig*.json             # 项目引用式 TS 配置
├── public/                    # 静态资源，会被复制到 dist/
│   ├── logo.jpg               # favicon
│   └── poster-en.png          # 顶部 Banner 海报
├── src/
│   ├── App.tsx                # 页面组装，按顺序渲染各 section
│   ├── main.tsx               # React createRoot
│   ├── types/
│   │   └── conference.ts      # 全部数据类型定义
│   ├── data/
│   │   └── conference.en.ts   # 全部文案数据
│   ├── hooks/
│   │   ├── useLanguage.ts     # 固定返回英文内容，并同步 html lang / title / meta
│   │   └── useReveal.ts       # 滚动进入视口时添加 .is-visible 动画
│   ├── styles/
│   │   ├── globals.css        # 重置、滚动行为、reveal 动画、focus-visible
│   │   └── variables.css      # 颜色 / 字体 / 布局 / 阴影 / 动效变量
│   └── components/
│       ├── Header/            # 粘性导航 + 移动端菜单 + 滚动高亮
│       ├── ConferenceBanner/  # 顶部海报
│       ├── Hero/              # 主标题、时间地点、截稿日期
│       ├── ConferenceOverview/# About 段落
│       ├── ConferenceHighlights/ # 三卡片（Date/Location/Publication）
│       ├── Committee/         # 组委会分组
│       ├── Program/           # 三日日程时间轴
│       ├── Papers/            # 论文类型说明
│       ├── Topics/            # 征稿主题列表
│       ├── Publication/       # 期刊专刊说明
│       ├── ImportantDates/    # 重要日期时间轴
│       ├── Guidelines/        # 投稿指南（支持段落内链）
│       ├── Acknowledgment/    # Microsoft CMT 致谢
│       ├── Contact/           # 联系邮箱
│       ├── Footer/            # 页脚
│       └── SectionHeader/     # 统一区块标题组件
```

---

## 4. 核心约定

### 4.1 数据驱动

- **所有可见文案**都应来自 `src/data/conference.en.ts`，不要硬编码在组件里。
- 类型定义在 `src/types/conference.ts`；新增字段时先改类型，再改数据，最后改组件。
- 每个 section 数据都有 `id`，对应 Header 导航的 `nav.id`，用于锚点跳转和滚动高亮。

### 4.2 组件模式

- 每个组件一个目录：`ComponentName.tsx` + `ComponentName.module.css`。
- 组件接收对应数据切片，例如 `interface ProgramProps { program: ConferenceContent["program"] }`。
- Section 组件统一使用 `useReveal<HTMLElement>()` 实现滚动渐入动画：
  ```tsx
  const ref = useReveal<HTMLElement>();
  return (
    <section id={...} className={`${styles.section} reveal`} ref={ref}>
      ...
    </section>
  );
  ```
- 标题尽量复用 `SectionHeader`；需要左对齐时传 `align="left"`。

### 4.3 CSS 约定

- 使用 **CSS Modules**，类名用 camelCase / kebab-case 均可。
- 优先使用 `src/styles/variables.css` 中的设计 token：
  - 背景：`--color-bg` / `--color-bg-secondary`
  - 文字：`--color-text` / `--color-text-secondary`
  - 强调色：`--color-accent`
  - 内容最大宽度：`--content-max: 1080px`
  - 阅读最大宽度：`--reading-max: 800px`
  - 间距：`--gutter`（响应式 24px / 16px）
- 区块常用上下内边距：桌面 `96px`，移动端 `64px`。
- 链接默认样式在 `globals.css` 中已定义（蓝色、无下划线、hover 下划线）。

### 4.4 链接处理

- 组件内部如需把文案里的某段文字变成链接，**不要**直接写 `<a>` 硬编码，优先让数据支持链接字段：
  - `Guidelines` 段落使用 `[label](url)` 标记，`renderInlineLinks` 会自动解析为 `<a>`。
  - `Program.items` 支持 `string | { text: string; link?: string }`，有 `link` 时渲染为外链。
- 外部链接统一加 `target="_blank" rel="noopener noreferrer"`。

---

## 5. 内容修改指南

### 修改普通文案

直接编辑 `src/data/conference.en.ts` 中对应字段即可。

### 新增 / 删除导航项

1. 在 `header.nav` 中增删 `{ id, label }`。
2. 确保对应 section 的 `id` 与之匹配。
3. 若新增 section，在 `App.tsx` 中按顺序插入组件，并在 `types/conference.ts` 补充类型。

### 在 Guidelines 段落里加内链

```ts
paragraphs: [
  "点击 [这里](https://example.com) 查看详情。",
]
```

### 在 Program 日程项里加链接

```ts
items: [
  { text: "Keynote Talks", link: "https://example.com/keynotes" },
  "Paper Presentations",
]
```

---

## 6. 构建与部署

### 推荐构建命令

当前环境直接执行 `npm run build` 会触发安全策略对 `wsl.exe` 的拦截，请使用：

```bash
node node_modules/typescript/bin/tsc -b && node node_modules/vite/bin/vite.js build
```

产物在 `dist/`。`dist/` 已加入 `.gitignore`，不提交到仓库。

### 本地预览

```bash
node node_modules/vite/bin/vite.js preview
```

或开发：

```bash
node node_modules/vite/bin/vite.js
```

### 远程仓库

- `origin`: `git@github.com:China6577/doc-ai-web.git`
- 主分支：`main`
- 完成修改后记得 `git push origin main`。

---

## 7. 设计系统速查

| Token | 值 | 用途 |
|-------|-----|------|
| `--color-bg` | `#ffffff` | 主背景 |
| `--color-bg-secondary` | `#f5f5f7` | 灰底区块（Highlights、Program 等） |
| `--color-text` | `#1d1d1f` | 主文字 |
| `--color-text-secondary` | `#6e6e73` | 次要文字 |
| `--color-accent` | `#0071e3` | 链接、强调、编号、marker |
| `--content-max` | `1080px` | 内容区最大宽度 |
| `--header-height` | `56px` | Header 最小高度（实际可能因导航换行而更高） |
| `--gutter` | `24px` / 移动端 `16px` | 水平边距 |

---

## 8. 可访问性与动画

- `html { scroll-behavior: smooth; scroll-padding-top: 80px; }` 保证锚点跳转留出头距。
- 所有 section 支持 `prefers-reduced-motion: reduce`，会禁用 reveal 动画和平滑滚动。
- 焦点状态：`a:focus-visible, button:focus-visible` 已有 2px 蓝色轮廓。

---

## 9. 常见坑

1. **不要直接运行 `npm run build`**：在当前沙箱会被拦截。改用上面给出的 `node .../tsc` + `node .../vite.js build`。
2. **静态图片**：直接替换 `public/` 下的文件；`assets/` 仅作源码备份，不会被自动复制到 `dist/`。
3. **CRLF 警告**：Git 会提示 LF 转 CRLF，这是 Windows 环境的正常现象，不影响提交。
4. **新增依赖**：项目极简，尽量避免新增依赖；确需安装时使用 isolated venv / node workspace，不要污染全局环境。
5. **不要写死中文**：本项目目前为英文站，文案统一走 `conference.en.ts`。

---

## 10. 联系人 / 维护信息

- 项目：China DocAI 2026 官网
- 用户偏好：清晰、正确、可教学的代码；不过度工程化。
- 最新工作日志：`C:\Users\36413\Desktop\vibe-codeing-project\workbuddy\web\doc-ai-web\.workbuddy\memory\2026-09-15.md`
