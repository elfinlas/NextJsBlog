import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {MarkdownData} from "../types/markdown.data.type";

const root = process.env.PWD ?? "";
const markdownFilePath = path.join(process.cwd(), "/__posts");

/**
 * 마크다운 경로에 파일의 갯수를 가져오는 함수
 * @returns
 */
export function getFileCount() {
    return fs.readdirSync(markdownFilePath).length;
}

/**
 * 마크다운 파일을 읽어서 객체를 가져오는 함수
 * @param targetFileName
 * @returns
 */
export function parseMarkDownFile(targetFileName: string): MarkdownData {
    const file = fs.readFileSync(path.join(markdownFilePath, targetFileName));
    const fileData = matter(file);

    return {
        data: {
            title: fileData.data.title,
            categories: fileData.data.categories,
            date: fileData.data.date,
            description: fileData.data.description,
            slug: fileData.data.slug,
            tags: fileData.data.tags,
        },
        content: fileData.content,
    };
}

/**
 * 파일 리스트를 가져오는 함수
 * @returns
 */
export function getFileList(): string[] {
    return fs.readdirSync(markdownFilePath);
}

/**
 * 파일의 확장자 삭제
 * @param filename
 * @returns
 */
export function removeFileExtension(filename: string): string {
    const lastIndex = filename.lastIndexOf(".");
    if (lastIndex === -1) {
        return filename;
    } else {
        return filename.substring(0, lastIndex);
    }
}
