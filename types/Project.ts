import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};

// ImageShape for content that contains images
export interface ImageShape {
  _type: string;
  alt: string;
  _key: string;
  asset: {
    _type: string;
    _ref: string;
  };
}

export interface CodeShape {
  _type: string;
  _key: string;
  language:
    | 'javascript'
    | 'css'
    | 'json'
    | 'jsx'
    | 'tsx'
    | 'typescript'
    | 'bash';
  filename: string;
  code: string;
}
