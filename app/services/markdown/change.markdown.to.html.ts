import {unified} from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

export default function changeMarkdownToHtml(mdText: string): string {
    const htmlText = unified()
        .use(markdown)
        .use(remark2rehype)
        .use(html)
        .processSync(mdText);
    return htmlText.toString();
}
