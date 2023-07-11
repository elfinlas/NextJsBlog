/**
 *
 * @param dateStr
 * @param splitKey
 * @returns
 */
export function changeDateStrToFormStr(
    dateStr: string,
    splitKey?: string,
): string {
    const dateStrs = dateStr.split(splitKey ? splitKey : "-");
    return dateStrs[0] + "년 " + dateStrs[1] + "월 " + dateStrs[2] + "일 ";
}
