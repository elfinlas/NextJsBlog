export interface BlogTitleProps {
    title?: string;
}

export default function BlogTitle(props: BlogTitleProps) {
    return (
        <div className="text-5xl text-center p-10 text-emerald-500">
            {props.title ? props.title : "Next.Js Blog"}
        </div>
    );
}
