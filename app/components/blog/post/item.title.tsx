export interface PostItemTitleProps {
    title: string;
}

export default function PostItemTitle(props: PostItemTitleProps) {
    return (
        <div className="text-5xl">
            {props.title}
            <hr className="mt-5 mb-5" />
        </div>
    );
}
