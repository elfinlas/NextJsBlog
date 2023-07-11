import {changeDateStrToFormStr} from "@/app/utils/date.util";

export interface PostItemDateProps {
    dateStr: string;
}

export default function PostItemDate(props: PostItemDateProps) {
    return (
        <div className="text-right text-lime-600 mb-3">
            {changeDateStrToFormStr(props.dateStr)}
        </div>
    );
}
