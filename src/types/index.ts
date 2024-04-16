export type TApiResponse = {
  message: string;
};

export type TTableOfContentsItem = {
  title: string;
  depth: number;
  slug: string;
};

export type TTableOfContents = Array<TTableOfContentsItem>;

export type TBaseFrontMatter = {
  title: string;
  description: string;
  caption?: string;
};

export type TPageFrontMatter = TBaseFrontMatter;

export type TPageOgImage = Partial<
  Pick<TPageFrontMatter, 'caption' | 'title' | 'description'>
>;

export type TPostFrontMatter = TBaseFrontMatter & {
  date: string;
  lang: 'id' | 'en';
  tags: Array<string>;
  category: string;
};

export type TPostOgImage = Partial<
  Pick<TPostFrontMatter, 'category' | 'title' | 'date' | 'lang' | 'tags'>
> & {
  aspectRatio?: '16/9' | '4/3' | '1/1';
};

export type TProjectFrontMatter = TBaseFrontMatter & {
  githubUrl?: string;
  npmUrl?: string;
  type: 'package';
};

export type TReaction = Record<any, number>;

export type TContentMeta = {
  meta: {
    views: number;
    shares: number;
  };
};

export type TContentMetaDetail = {
  meta: {
    views: number;
    shares: number;
    reactions: number;
    reactionsDetail: TReaction;
  };
  metaUser: {
    reactionsDetail: TReaction;
  };
  metaSection: {
    [section: string]: {
      reactionsDetail: TReaction;
    };
  };
};

export type TContentActivityShares = {
  activityType: 'SHARE';
  type: any;
  createdAt: string;
  slug: string;
  contentTitle: string;
  contentType: any;
};

export type TContentActivityReaction = {
  activityType: 'REACTION';
  type: any;
  count: number;
  createdAt: string;
  slug: string;
  contentTitle: string;
  contentType: any;
};

export type TContentActivity =
  | TContentActivityShares
  | TContentActivityReaction;
