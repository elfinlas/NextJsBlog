import Link from "next/link";
import changeMarkdownToHtml from "../services/markdown/change.markdown.to.html";
import {parseMarkDownFile} from "../utils/files.util";
import CategoryItem from "../components/blog/common/category/category.item";
import {changeDateStrToFormStr} from "../utils/date.util";
import TagItem from "../components/blog/common/tag/tag.item";
import BlogTitle from "../components/blog/common/title";
import PostItemTitle from "../components/blog/post/item.title";
import PostItemDate from "../components/blog/post/item.date";
import PostItemCategory from "../components/blog/post/item.category";
import PostItemContent from "../components/blog/post/item.content";
import PostItemTag from "../components/blog/post/item.tag";
import PostItemFooter from "../components/blog/post/item.footer";

export default function BlogPost({params}: any) {
    const postItem = parseMarkDownFile(params.slug + ".md");
    return (
        <>
            <BlogTitle />

            {/* Item */}
            <div className="grid grid-cols-4">
                <div className="col-start-2 col-end-4 rounded-lg p-5 border-emerald-200 border-2 ">
                    {/* Title */}
                    <PostItemTitle title={postItem.data.title} />

                    {/* cate & date  */}
                    <div className="mt-5">
                        {/* date */}
                        <PostItemDate dateStr={postItem.data.date} />

                        {/* cate */}
                        <PostItemCategory
                            categoryItemList={postItem.data.categories}
                        />
                    </div>

                    {/* Content */}
                    <PostItemContent content={postItem.content} />

                    {/* Tag */}
                    <PostItemTag tagItemList={postItem.data.tags} />

                    <hr className="mt-5 mb-5" />

                    {/* Footer */}
                    <PostItemFooter />
                </div>
            </div>
        </>
    );
}
