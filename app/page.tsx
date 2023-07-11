import BlogTitle from "./components/blog/common/title";
import PostListItem from "./components/blog/list/list.item";
import {getMarkDownList} from "./services/markdown/get.markdown.post.item.list";
import {PostItem} from "./types/markdown.data.type";

export default function Home() {
    const postItemList = getMarkDownList();

    return (
        <>
            <main>
                <BlogTitle />

                <div className="grid grid-cols-3">
                    <div className="col-start-2 ">
                        {postItemList.map((item: PostItem, index: number) => {
                            return (
                                <PostListItem
                                    postItem={item}
                                    key={index + "-"}
                                />
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}

// https://programming119.tistory.com/267
//https://programming119.tistory.com/273
//https://jha-memo.tistory.com/95
