import { AxiosModuleInstance } from "@/utils/axiosModule";
import { definitions } from "@/api/interfaces";
import { AxiosRequestConfig } from "axios";
import ArticleId from "./[articleId]";

export default (baseInstance: AxiosModuleInstance) => {
    const instance = baseInstance.append("/articles");
    return {
        get: (config?: AxiosRequestConfig) => { return instance.get<ArticlesGetResponse>("", config); },

        // children
        id: ArticleId(instance),
    };
};

export interface ArticlesGetResponse {
    count: number;
    next: string;
    previous: string;
    results: definitions["Article"][];
}
