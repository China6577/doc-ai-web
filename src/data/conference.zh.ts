import type { ConferenceContent } from "../types/conference";

export const conferenceZh: ConferenceContent = {
  meta: {
    title: "2026 CSIG 文档智能大会 | China DocAI 2026",
    description:
      "2026 CSIG 文档智能大会（China DocAI 2026）将于 2026 年 12 月 25-27 日在北京召开。会议聚焦文档智能基础理论、核心算法与工程应用，征稿范围涵盖文档感知与结构解析、语义理解与多模态大模型、生成检索与智能体、数据集与评测、安全取证与可信智能、系统与行业应用六大方向。",
    htmlLang: "zh-CN",
  },
  header: {
    brand: "China DocAI 2026",
    nav: [
      { id: "about", label: "大会介绍" },
      { id: "committee", label: "组织架构" },
      { id: "program", label: "会议日程" },
      { id: "topics", label: "征稿范围" },
      { id: "dates", label: "重要日期" },
      { id: "submission", label: "投稿说明" },
    ],
    languageSwitchLabel: "切换语言 / Switch language",
    menuLabel: "打开菜单",
    closeLabel: "关闭菜单",
  },
  banner: {
    alt: "CSIG 文档智能大会",
  },
  hero: {
    kicker: "征稿通知",
    titleLine1: "2026 CSIG",
    titleLine2: "文档智能大会",
    subtitle: "China DocAI 2026",
    datetime: "2026 年 12 月 25–27 日",
    location: "北京",
    deadlineLabel: "正文截稿",
    deadlineDate: "2026.10.31",
    cfpLink: "了解征稿详情 ↓",
  },
  overview: {
    id: "about",
    heading: "大会介绍",
    subheading: "About China DocAI 2026",
    paragraphs: [
      "随着数字政务、智慧办公、数字档案与人工智能技术的深度融合，文档智能处理在版式解析、内容识别、信息抽取、智能问答、多模态理解等场景的应用愈发普及。高精度、高鲁棒性的文档智能解析能力，是实现海量纸质与电子文档数字化、结构化、智能化应用的核心支撑。",
      "然而，真实场景下的文档数据普遍存在版式复杂、字迹模糊、遮挡畸变、多源异构、语种混杂、手写与印刷文本交织等问题，导致有效特征稀疏、干扰信息繁多，传统文本处理与通用视觉模型难以适配复杂文档任务。尤其针对古籍文献、手写单据、公式表格、模糊扫描件等难点场景，现有算法易出现解析偏差、信息漏检、结构误判与语义理解失效等问题，极大限制了文档智能技术的产业化落地，也对高精度、强泛化、高可靠的文档视觉与多模态学习体系构建提出了更高要求。",
      "近年来，多模态大模型、小样本学习、鲁棒特征学习与智能评测技术飞速迭代，为复杂文档智能解析任务提供了全新技术范式。在此背景下，面向真实复杂场景开展文档智能基础理论、核心算法与工程应用研究，具备重要的学术价值与广阔的落地前景。",
      "为助力数字内容产业与智慧政务建设发展，系统梳理国内文档智能领域的前沿研究进展，推动算法创新、技术迭代与产学研深度融合，特此召开 2026 CSIG 文档智能大会（China DocAI 2026）。本次会议将于 2026 年 12 月 25-27 日在北京召开，欢迎大家积极投稿，会议将遴选优秀论文到《中国图像图形学报》“智能文档”专刊发表。",
    ],
  },
  highlights: {
    heading: "大会信息",
    items: [
      { label: "日期", value: "2026.12.25 — 27" },
      { label: "地点", value: "北京" },
      { label: "论文推介", value: "《中国图像图形学报》“智能文档”专刊" },
    ],
  },
  committee: {
    id: "committee",
    heading: "组织架构",
    groups: [
      {
        title: "大会主席",
        members: [
          { name: "刘成林", affiliation: "中国科学院自动化研究所" },
          { name: "金连文", affiliation: "华南理工大学" },
          { name: "殷绪成", affiliation: "北京科技大学" },
          { name: "高良才", affiliation: "北京大学" },
        ],
      },
      {
        title: "程序委员会主席",
        members: [
          { name: "白翔", affiliation: "华中科技大学" },
          { name: "乔宇", affiliation: "浦江实验室" },
          { name: "王秋锋", affiliation: "西交利物浦大学" },
          { name: "周宇", affiliation: "南开大学" },
        ],
      },
      {
        title: "组织委员会主席",
        members: [
          { name: "殷飞", affiliation: "中国科学院自动化研究所" },
          { name: "杨春", affiliation: "北京科技大学" },
          { name: "连宙辉", affiliation: "北京大学" },
          { name: "彭良瑞", affiliation: "清华大学" },
        ],
      },
    ],
  },
  program: {
    id: "program",
    heading: "会议日程",
    subheading: "Program",
    days: [
      { date: "12 月 25 日", items: ["注册报到"] },
      {
        date: "12 月 26 日",
        items: ["特邀报告", "论文报告", "顶会顶刊论文分享", "海报交流"],
      },
      { date: "12 月 27 日", items: ["特邀报告", "海报交流"] },
    ],
  },
  papers: {
    heading: "会议论文",
    categories: [
      { number: "01", title: "顶会顶刊分享论文" },
      { number: "02", title: "未经发表过的原创论文" },
    ],
    note: "原创论文经过评审进行录用，并遴选优秀论文到《中国图像图形学报》“智能文档”专刊发表。",
  },
  topics: {
    id: "topics",
    heading: "征稿范围",
    subheading: "Topics of Interest",
    sections: [
      {
        id: "topic-1",
        number: "01",
        title: "文档图像基础感知、识别与结构解析",
        items: [
          "文档图像处理、质量增强、去噪复原与畸变矫正",
          "物理与逻辑版面分析、文档布局理解与版式重建",
          "文本、符号、图形识别",
          "多语种 / 少数民族文字识别",
          "手写文档、笔式文档识别",
          "移动端文字识别、场景文字检测与识别",
          "表格、公式、图表、化学分子式、CAD 图、流程图等解析",
          "历史文档与古籍文档分析",
          "多媒体文档分析",
        ],
      },
      {
        id: "topic-2",
        number: "02",
        title: "文档表示学习、语义理解与多模态大模型",
        items: [
          "小样本、零样本文档学习",
          "文档模型鲁棒性与对抗学习",
          "文档基础模型、多模态文档大模型",
          "文档内容分类与语义理解",
          "文档信息抽取、实体关系挖掘与语义解析以及文档问答",
          "面向文档分析的自然语言处理",
          "长文档理解与推理",
          "文档摘要与翻译",
          "文档图文跨模态理解与复杂语义建模",
        ],
      },
      {
        id: "topic-3",
        number: "03",
        title: "文档生成、检索、交互与智能体",
        items: [
          "文本及文档图像生成",
          "文档合成与版式生成",
          "文档索引与智能检索、跨模态文档检索",
          "面向文献检索与知识发现的文档智能",
          "文档 RAG 与知识增强",
          "文档智能体技术",
          "人机文档交互",
          "智能办公与办公自动化",
          "基于大模型的文档问答、任务规划与自动化处理",
        ],
      },
      {
        id: "topic-4",
        number: "04",
        title: "文档智能数据集与评测",
        items: [
          "文档合成数据与数据增强",
          "高质量文档数据集构建",
          "文档智能评测方法、评价指标与评测体系",
          "文档大模型幻觉、泛化能力与可靠性评测",
        ],
      },
      {
        id: "topic-5",
        number: "05",
        title: "文档安全、取证与可信智能",
        items: [
          "隐私保护与安全文档理解",
          "文档水印与版权保护",
          "文档真伪鉴别、篡改检测与内容溯源",
          "文档取证与来源分析",
          "签名识别与签名验证",
          "敏感信息识别与隐私保护",
          "联邦学习与隐私计算下的文档处理",
          "可信文档智能、大模型安全以及复杂场景下的文档真实性、完整性与可靠性研究",
        ],
      },
      {
        id: "topic-6",
        number: "06",
        title: "文档智能系统与行业应用",
        items: [
          "文档分析系统、文档解析工具链与智能办公系统",
          "轻量化文档模型",
          "多源异构文档处理与复杂文档智能分析",
          "政务、金融、档案古籍、工业、教育、医疗等领域的文档智能应用",
          "医学文档分析、数字档案与知识服务",
          "文档智能在科研文献分析与检索中的应用",
          "文档智能产学研实践，以及其他与文档分析、理解、生成和智能应用相关的创新研究",
        ],
      },
    ],
  },
  publication: {
    heading: "论文推介",
    subheading: "Publication",
    journalName: "《中国图像图形学报》",
    specialIssue: "“智能文档”专刊",
    paragraphs: [
      "我们在《中国图像图形学报》组织专刊，录取部分优秀论文；其余论文将会发布在专委会公众号进行宣传。",
    ],
  },
  dates: {
    id: "dates",
    heading: "重要日期",
    subheading: "Important Dates",
    items: [
      { date: "2026.10.31", label: "正文截稿" },
      { date: "2026.11.30", label: "会议论文录用通知" },
      { date: "2026.12.15", label: "学报论文录用通知" },
    ],
  },
  submission: {
    id: "submission",
    heading: "投稿系统",
    statusBadge: "即将公布",
    description: "投稿系统即将公布",
  },
  guidelines: {
    heading: "投稿注意事项",
    subheading: "Submission Guidelines",
    items: [
      {
        number: "01",
        title: "原创论文稿件格式",
        paragraphs: [
          "参照《中国图象图形学报》体例和模板进行撰写：官网—下载中心—学报体例和排版模板。只接收中文投稿。",
        ],
        link: {
          label: "学报体例和排版模板",
          url: "http://www.cjig.cn/previewFile?id=96199771&type=pdf&lang=zh",
        },
      },
      {
        number: "02",
        title: "原创性与版权",
        paragraphs: [
          "原创论文未在正式出版物上发表过，不存在一稿多投现象，保证投稿文章的合法性（无抄袭、剽窃、侵权等不良行为），投稿后需签署论文版权转让和保密审查证明。",
        ],
      },
      {
        number: "03",
        title: "双盲评审",
        paragraphs: [
          "每篇稿件将由多名领域专家匿名评审，大会审稿采用双盲评审机制，论文中不能出现任何作者及单位信息，否则将作退稿处理。",
        ],
      },
      {
        number: "04",
        title: "注册参会",
        paragraphs: [
          "所有录用论文必须有一位作者注册并且参会，否则论文将不会被发表和宣传。",
        ],
      },
    ],
  },
  contact: {
    id: "contact",
    heading: "联系我们",
    emailLabel: "会务邮箱",
    email: "China_DocAI@163.com",
  },
  footer: {
    brand: "China DocAI 2026",
    subtitle: "2026 CSIG 文档智能大会",
  },
};
