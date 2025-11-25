export type BlockType = 'heading' | 'paragraph' | 'image' | 'code' | 'quote' | 'list' | 'html';

export interface BaseBlock {
    id: string;
    type: BlockType;
}

export interface HeadingBlock extends BaseBlock {
    type: 'heading';
    level: 1 | 2 | 3 | 4 | 5 | 6;
    content: string;
}

export interface ParagraphBlock extends BaseBlock {
    type: 'paragraph';
    content: string;
}

export interface ImageBlock extends BaseBlock {
    type: 'image';
    url: string;
    alt: string;
    caption?: string;
}

export interface CodeBlock extends BaseBlock {
    type: 'code';
    language: string;
    code: string;
}

export interface QuoteBlock extends BaseBlock {
    type: 'quote';
    content: string;
    author?: string;
}

export interface ListBlock extends BaseBlock {
    type: 'list';
    ordered: boolean;
    items: string[];
}

export interface HtmlBlock extends BaseBlock {
    type: 'html';
    html: string;
}

export type Block = HeadingBlock | ParagraphBlock | ImageBlock | CodeBlock | QuoteBlock | ListBlock | HtmlBlock;
