import { AxiosModuleInstance } from "@/utils/axiosModule";
import { definitions } from "@/api/interfaces";
import { AxiosRequestConfig } from "axios";
import ArticleId from "./[articleId]";

export default (baseInstance: AxiosModuleInstance) => {
    const instance = baseInstance.append("/articles");
    return {
        get: (config?: AxiosRequestConfig) => { return instance.get<definitions["Article"][]>("", config); },

        // children
        id: ArticleId(instance),
    };
};
