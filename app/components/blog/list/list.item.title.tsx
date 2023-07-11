import {removeFileExtension} from "@/app/utils/files.util";
import Link from "next/link";

export interface PostListTitleProps {
    title: string;
    fileName: string;
}

export default function PostListTitle(props: PostListTitleProps) {
    return (
        <div className="font-bold text-left text-4xl">
            <Link href={removeFileExtension(props.fileName)}>
                {props.title}
            </Link>
        </div>
    );
}
