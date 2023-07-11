import changeMarkdownToHtml from "@/app/services/markdown/change.markdown.to.html";

export interface PostListItemContentSummaryProps {
    content: string;
}

export default function PostListItemContentSummary(
    props: PostListItemContentSummaryProps,
) {
    var htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
    const contentText = changeMarkdownToHtml(props.content).replace(
        htmlRegexG,
        "",
    );

    return (
        <div className="mt-5 text-green-700">
            {contentText.substring(
                0,
                contentText.length >= 30 ? 30 : contentText.length,
            ) + (contentText.length >= 30 ? "..." : "")}
        </div>
    );
}
