interface BaseMetaTag {
  content: string;
}

interface PropertyMetaTag extends BaseMetaTag {
  property: string;
}

interface NameMetaTag extends BaseMetaTag {
  name: string;
}

export type MetaTag = PropertyMetaTag | NameMetaTag;
