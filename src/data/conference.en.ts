import type { ConferenceContent } from "../types/conference";

export const conferenceEn: ConferenceContent = {
  meta: {
    title: "China DocAI 2026",
    description:
      "China DocAI 2026 will be held in Beijing, China, from December 25 to 27, 2026. The conference focuses on fundamental theories, core algorithms, and engineering applications of document intelligence, covering six tracks: document perception and structure parsing, semantic understanding and multimodal large models, generation, retrieval and agents, datasets and evaluation, security, forensics and trustworthy intelligence, and systems and industrial applications.",
    htmlLang: "en",
  },
  header: {
    brand: "China DocAI 2026",
    nav: [
      { id: "about", label: "About" },
      { id: "committee", label: "Committee" },
      { id: "program", label: "Program" },
      { id: "topics", label: "Topics" },
      { id: "dates", label: "Important Dates" },
    ],
    languageSwitchLabel: "Switch language / 切换语言",
    menuLabel: "Open menu",
    closeLabel: "Close menu",
  },
  banner: {
    alt: "China DocAI 2026",
  },
  hero: {
    kicker: "CALL FOR PAPERS",
    titleLine1: "2026 CSIG",
    titleLine2: "China DocAI 2026",
    datetime: "December 25–27, 2026",
    location: "Beijing, China",
    deadlineLabel: "Paper Submission Deadline",
    deadlineDate: "Oct 31, 2026",
    cfpLink: "View Call for Papers ↓",
  },
  overview: {
    id: "about",
    heading: "About China DocAI 2026",
    subheading: "",
    paragraphs: [
      "As digital government services, smart offices, digital archives, and artificial intelligence become increasingly integrated, document intelligence is being applied ever more widely in scenarios such as layout parsing, content recognition, information extraction, intelligent question answering, and multimodal understanding. High-precision, highly robust document parsing capability is the core foundation for digitizing, structuring, and intelligently utilizing massive volumes of paper and electronic documents.",
      "However, real-world document data commonly suffers from complex layouts, blurred handwriting, occlusion and distortion, multi-source heterogeneity, mixed languages, and interleaved handwritten and printed text. These issues lead to sparse effective features and abundant interference, making it difficult for traditional text processing methods and general-purpose vision models to handle complex document tasks. In particularly challenging scenarios—such as ancient books and historical documents, handwritten receipts, formulas and tables, and blurred scans—existing algorithms are prone to parsing deviations, missed information detection, structural misjudgment, and failures in semantic understanding. This severely limits the industrial adoption of document intelligence technologies and raises the bar for building high-precision, strongly generalizable, and highly reliable document vision and multimodal learning systems.",
      "In recent years, multimodal large models, few-shot learning, robust feature learning, and intelligent evaluation techniques have advanced rapidly, offering a brand-new technical paradigm for complex document parsing. Against this backdrop, research into the fundamental theories, core algorithms, and engineering applications of document intelligence for real-world complex scenarios carries significant academic value and broad prospects for practical deployment.",
      "To support the development of the digital content industry and smart government services, to systematically review frontier research progress in document intelligence in China, and to promote algorithmic innovation, technological iteration, and deep integration of industry, academia, and research, China DocAI 2026 is hereby convened. The conference will take place in Beijing from December 25 to 27, 2026. Submissions are warmly invited, and outstanding papers will be selected for publication in the \u201cIntelligent Document\u201d special issue of the Journal of Image and Graphics.",
    ],
  },
  highlights: {
    heading: "At a Glance",
    items: [
      { label: "Date", value: "December 25–27, 2026" },
      { label: "Location", value: "Beijing, China" },
      {
        label: "Publication",
        value: "\u201cIntelligent Document\u201d Special Issue, Journal of Image and Graphics",
      },
    ],
  },
  committee: {
    id: "committee",
    heading: "Committee",
    subheading: "",
    groups: [
      {
        title: "General Chairs",
        members: [
          {
            name: "Cheng-Lin Liu",
            affiliation: "Institute of Automation, Chinese Academy of Sciences",
          },
          {
            name: "Lianwen Jin",
            affiliation: "South China University of Technology",
          },
          {
            name: "Xucheng Yin",
            affiliation: "University of Science and Technology Beijing",
          },
          { name: "Liangcai Gao", affiliation: "Peking University" },
        ],
      },
      {
        title: "Program Committee Chairs",
        members: [
          {
            name: "Xiang Bai",
            affiliation: "Huazhong University of Science and Technology",
          },
          { name: "Yu Qiao", affiliation: "Shanghai AI Laboratory" },
          {
            name: "Qiufeng Wang",
            affiliation: "Xi'an Jiaotong-Liverpool University",
          },
          { name: "Yu Zhou", affiliation: "Nankai University" },
        ],
      },
      {
        title: "Organizing Committee Chairs",
        members: [
          {
            name: "Fei Yin",
            affiliation: "Institute of Automation, Chinese Academy of Sciences",
          },
          {
            name: "Chun Yang",
            affiliation: "University of Science and Technology Beijing",
          },
          { name: "Zhouhui Lian", affiliation: "Peking University" },
          { name: "Liangrui Peng", affiliation: "Tsinghua University" },
        ],
      },
    ],
  },
  program: {
    id: "program",
    heading: "Program",
    subheading: "",
    days: [
      { date: "December 25", items: ["Registration and Check-in"] },
      {
        date: "December 26",
        items: [
          "Keynote Talks",
          "Paper Presentations",
          "Top-Conference and Journal Paper Sharing",
          "Poster Session",
        ],
      },
      {
        date: "December 27",
        items: ["Keynote Talks", "Poster Session"],
      },
    ],
  },
  papers: {
    heading: "Papers",
    subheading: "",
    categories: [
      { number: "01", title: "Papers Shared from Top Conferences and Journals" },
      { number: "02", title: "Original Unpublished Papers" },
    ],
    note: "Original papers will be accepted through peer review, and outstanding papers will be selected for publication in the \u201cIntelligent Document\u201d special issue of the Journal of Image and Graphics.",
  },
  topics: {
    id: "topics",
    heading: "Topics of Interest",
    subheading: "",
    sections: [
      {
        id: "topic-1",
        number: "01",
        title: "Document Image Perception, Recognition and Structure Parsing",
        items: [
          "Document image processing, quality enhancement, denoising, restoration, and distortion correction",
          "Physical and logical layout analysis, document layout understanding, and format reconstruction",
          "Text, symbol, and graphics recognition",
          "Multilingual and ethnic minority script recognition",
          "Handwritten and pen-based document recognition",
          "Mobile text recognition; scene text detection and recognition",
          "Parsing of tables, formulas, charts, chemical molecular formulas, CAD drawings, flowcharts, and more",
          "Historical and ancient document analysis",
          "Multimedia document analysis",
        ],
      },
      {
        id: "topic-2",
        number: "02",
        title: "Document Representation Learning, Semantic Understanding and Multimodal Large Models",
        items: [
          "Few-shot and zero-shot document learning",
          "Robustness and adversarial learning for document models",
          "Document foundation models and multimodal document large models",
          "Document content classification and semantic understanding",
          "Document information extraction, entity-relation mining, semantic parsing, and document question answering",
          "Natural language processing for document analysis",
          "Long document understanding and reasoning",
          "Document summarization and translation",
          "Cross-modal image-text understanding of documents and complex semantic modeling",
        ],
      },
      {
        id: "topic-3",
        number: "03",
        title: "Document Generation, Retrieval, Interaction and Agents",
        items: [
          "Text and document image generation",
          "Document synthesis and layout generation",
          "Document indexing and intelligent retrieval; cross-modal document retrieval",
          "Document intelligence for literature retrieval and knowledge discovery",
          "Document RAG and knowledge augmentation",
          "Document agent technologies",
          "Human-computer document interaction",
          "Smart office and office automation",
          "LLM-based document question answering, task planning, and automated processing",
        ],
      },
      {
        id: "topic-4",
        number: "04",
        title: "Document Intelligence Datasets and Evaluation",
        items: [
          "Synthetic document data and data augmentation",
          "Construction of high-quality document datasets",
          "Evaluation methods, metrics, and evaluation systems for document intelligence",
          "Evaluation of hallucination, generalization, and reliability of document large models",
        ],
      },
      {
        id: "topic-5",
        number: "05",
        title: "Document Security, Forensics and Trustworthy Intelligence",
        items: [
          "Privacy-preserving and secure document understanding",
          "Document watermarking and copyright protection",
          "Document authenticity verification, tamper detection, and content provenance",
          "Document forensics and source analysis",
          "Signature recognition and verification",
          "Sensitive information recognition and privacy protection",
          "Document processing under federated learning and privacy computing",
          "Trustworthy document intelligence, large model security, and research on document authenticity, integrity, and reliability in complex scenarios",
        ],
      },
      {
        id: "topic-6",
        number: "06",
        title: "Document Intelligence Systems and Industrial Applications",
        items: [
          "Document analysis systems, document parsing toolchains, and intelligent office systems",
          "Lightweight document models",
          "Multi-source heterogeneous document processing and complex document intelligent analysis",
          "Document intelligence applications in government, finance, archives and ancient books, industry, education, healthcare, and other domains",
          "Medical document analysis, digital archives, and knowledge services",
          "Applications of document intelligence in scientific literature analysis and retrieval",
          "Industry-academia-research practice in document intelligence, and other innovative research related to document analysis, understanding, generation, and intelligent applications",
        ],
      },
    ],
  },
  publication: {
    heading: "Publication",
    subheading: "",
    journalName: "Journal of Image and Graphics",
    specialIssue: "\u201cIntelligent Document\u201d Special Issue",
    paragraphs: [
      "We have organized a special issue in the Journal of Image and Graphics to publish selected outstanding papers; the remaining papers will be promoted on the technical committee's official WeChat account.",
    ],
  },
  dates: {
    id: "dates",
    heading: "Important Dates",
    subheading: "",
    items: [
      { date: "Oct 31, 2026", label: "Paper Submission Deadline" },
      { date: "Nov 30, 2026", label: "Conference Paper Notification" },
      { date: "Dec 15, 2026", label: "Journal Paper Notification" },
    ],
  },
  guidelines: {
    heading: "Submission Guidelines",
    subheading: "",
    items: [
      {
        number: "01",
        title: "Originality and Copyright",
        paragraphs: [
          "Original papers must not have been published in any formal publication and must not be under simultaneous submission elsewhere. Authors must guarantee the legitimacy of the submitted manuscript (free of plagiarism, infringement, or other misconduct). After submission, authors are required to sign a copyright transfer agreement and a confidentiality review certificate.",
        ],
      },
      {
        number: "02",
        title: "Double-blind Review",
        paragraphs: [
          "Each manuscript will be anonymously reviewed by multiple domain experts. The conference adopts a double-blind review mechanism; manuscripts must not contain any author or affiliation information, otherwise they will be rejected.",
        ],
      },
      {
        number: "03",
        title: "Registration and Attendance",
        paragraphs: [
          "Each accepted paper must have at least one author registered and attending the conference; otherwise, the paper will not be published or promoted.",
        ],
      },
    ],
  },
  contact: {
    id: "contact",
    heading: "Contact Us",
    emailLabel: "Conference Email",
    email: "China_DocAI@163.com",
  },
  footer: {
    brand: "China DocAI 2026",
  },
};
