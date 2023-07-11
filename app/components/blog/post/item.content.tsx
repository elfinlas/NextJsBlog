import changeMarkdownToHtml from "@/app/services/markdown/change.markdown.to.html";

export interface PostItemContentProps {
    content: string;
}

export default function PostItemContent(props: PostItemContentProps) {
    return (
        <div
            className="mt-10"
            dangerouslySetInnerHTML={{
                __html: changeMarkdownToHtml(props.content),
            }}
        />
    );
}
