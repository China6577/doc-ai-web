export type Language = "zh" | "en";

export interface NavItem {
  id: string;
  label: string;
}

export interface CommitteeMember {
  name: string;
  affiliation: string;
}

export interface CommitteeGroup {
  title: string;
  members: CommitteeMember[];
}

export interface ProgramDay {
  date: string;
  weekday?: string;
  items: string[];
}

export interface TopicSection {
  id: string;
  number: string;
  title: string;
  items: string[];
}

export interface ImportantDate {
  date: string;
  label: string;
}

export interface PaperCategory {
  number: string;
  title: string;
}

export interface HighlightItem {
  label: string;
  value: string;
}

export interface GuidelineItem {
  number: string;
  title: string;
  paragraphs: string[];
  highlight?: string;
  link?: {
    label: string;
    url: string;
  };
}

export interface ConferenceContent {
  meta: {
    title: string;
    description: string;
    htmlLang: string;
  };
  header: {
    brand: string;
    nav: NavItem[];
    languageSwitchLabel: string;
    menuLabel: string;
    closeLabel: string;
  };
  banner: {
    alt: string;
  };
  hero: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    datetime: string;
    location: string;
    deadlineLabel: string;
    deadlineDate: string;
    cfpLink: string;
  };
  overview: {
    id: string;
    heading: string;
    subheading?: string;
    paragraphs: string[];
  };
  highlights: {
    heading: string;
    items: HighlightItem[];
  };
  committee: {
    id: string;
    heading: string;
    subheading?: string;
    groups: CommitteeGroup[];
  };
  program: {
    id: string;
    heading: string;
    subheading?: string;
    days: ProgramDay[];
  };
  papers: {
    heading: string;
    subheading?: string;
    categories: PaperCategory[];
    note: string;
  };
  topics: {
    id: string;
    heading: string;
    subheading?: string;
    sections: TopicSection[];
  };
  publication: {
    heading: string;
    subheading?: string;
    journalName: string;
    specialIssue: string;
    paragraphs: string[];
  };
  dates: {
    id: string;
    heading: string;
    subheading?: string;
    items: ImportantDate[];
  };
  submission: {
    id: string;
    heading: string;
    subheading?: string;
    statusBadge: string;
    description: string;
  };
  guidelines: {
    heading: string;
    subheading?: string;
    items: GuidelineItem[];
  };
  footer: {
    brand: string;
    subtitle: string;
  };
}
