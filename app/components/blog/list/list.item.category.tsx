import CategoryItem from "../common/category/category.item";

export interface PostListItemCategoryListProps {
    categoryItemList: string[];
}

export default function PostListItemCategoryList(
    props: PostListItemCategoryListProps,
) {
    return (
        <div className="mt-2">
            <div className="flex flex-row-reverse">
                {props.categoryItemList.map((item: string) => {
                    return CategoryItem({category: item});
                })}
            </div>
        </div>
    );
}
