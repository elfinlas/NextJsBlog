import {PostItem} from "../../types/markdown.data.type";
import {getFileList, parseMarkDownFile} from "../../utils/files.util";

/**
 * ma
 * @returns
 */
export function getMarkDownList(): PostItem[] {
    return getFileList()
        .map((item: string): PostItem => {
            return {fileName: item, ...parseMarkDownFile(item)};
        })
        .sort(
            (a: PostItem, b: PostItem) =>
                new Date(b.data.date).getTime() -
                new Date(a.data.date).getTime(),
        );
}
