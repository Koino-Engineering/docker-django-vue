import { definitions } from "./interfaces";

type ArticleType = definitions["Article"]
export class Article implements ArticleType {
    id?: number;
    title: string;
    description: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    constructor (title: string, description: string, id?: number, created_at?: string, updated_at?: string, deleted_at?: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
}
