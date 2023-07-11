export interface TagItemProps {
    tag: string;
}

export default function TagItem(props: TagItemProps) {
    return (
        <>
            <div className="border-2 border-emerald-400/75 rounded-2xl p-1 ml-1 text-emerald-400">
                {props.tag}
            </div>
        </>
    );
}
