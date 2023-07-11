import Link from "next/link";

export default function PostItemFooter() {
    return (
        <div className="mt-10 flex flex-row-reverse text-right ">
            <Link href={"/"}>
                <div className="rounded-3xl p-5 bg-teal-500 hover:bg-teal-600 text-teal-50">
                    뒤로가기
                </div>
            </Link>
        </div>
    );
}
