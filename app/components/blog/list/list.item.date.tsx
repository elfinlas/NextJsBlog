import {changeDateStrToFormStr} from "@/app/utils/date.util";

export interface PostListItemDateProps {
    dateStr: string;
}

export default function PostListItemDate(props: PostListItemDateProps) {
    return (
        <div className="text-right text-green-600 text-xl">
            {changeDateStrToFormStr(props.dateStr)}
        </div>
    );
}
