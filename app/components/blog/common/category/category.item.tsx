export interface CategoryItemProps {
    category: string;
}

export default function CategoryItem(props: CategoryItemProps) {
    return (
        <>
            <div className="border-2 border-lime-600/75 rounded-2xl p-1 ml-1 text-lime-600">
                {props.category}
            </div>
        </>
    );
}
