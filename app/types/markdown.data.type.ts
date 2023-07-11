export interface FrontMatter {
    title: string;
    categories: string[];
    date: string;
    description: string;
    slug: string;
    tags: string[];
}

export interface MarkdownData {
    content: string;
    data: FrontMatter;
    isEmpty?: boolean;
    excerpt?: string;
}

export interface PostItem extends MarkdownData {
    fileName: string;
}
