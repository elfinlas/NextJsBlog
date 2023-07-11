import {PostItem} from "@/app/types/markdown.data.type";
import PostListTitle from "./list.item.title";
import PostListItemDate from "./list.item.date";
import PostListItemCategoryList from "./list.item.category";
import PostListItemContentSummary from "./list.item.content.summary";

export interface PostListItemProps {
    postItem: PostItem;
}

export default function PostListItem(props: PostListItemProps) {
    return (
        <>
            <div className="bg-green-50 w-full rounded-2xl p-5 border-lime-600 border-2 mt-3 mb-3">
                {/* Title */}
                <PostListTitle
                    title={props.postItem.data.title}
                    fileName={props.postItem.fileName}
                />

                {/* Date */}
                <PostListItemDate dateStr={props.postItem.data.date} />

                {/* Categoriy */}
                <PostListItemCategoryList
                    categoryItemList={props.postItem.data.categories}
                />

                {/* Content summary */}
                <PostListItemContentSummary content={props.postItem.content} />
            </div>

            {/* <hr className="mt-3 mb-3 border-22 border-emerald-900" /> */}
        </>
    );
}
