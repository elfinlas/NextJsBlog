import CategoryItem from "../common/category/category.item";

export interface PostItemCategoryProps {
    categoryItemList: string[];
}

export default function PostItemCategory(props: PostItemCategoryProps) {
    return (
        <div className="flex flex-row-reverse">
            {props.categoryItemList.map((item: string) => {
                return CategoryItem({category: item});
            })}
        </div>
    );
}
