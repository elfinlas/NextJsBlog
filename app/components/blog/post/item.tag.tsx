import TagItem from "../common/tag/tag.item";

export interface PostItemTagProps {
    tagItemList: string[];
}

export default function PostItemTag(props: PostItemTagProps) {
    return (
        <div className="flex flex-row-reverse mt-10 mb-10">
            {props.tagItemList.map((item: string) => {
                return TagItem({tag: item});
            })}
        </div>
    );
}
