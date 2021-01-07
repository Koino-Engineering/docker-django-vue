import { definitions } from "@/api/interfaces";
import { AxiosModuleInstance } from "@/utils/axiosModule";
import { AxiosRequestConfig } from "axios";

export default (baseInstance: AxiosModuleInstance) => {
    return (articleId: string) => {
        const instance = baseInstance.append("/" + articleId);
        return {
            get: (config?: AxiosRequestConfig) => { return instance.get<definitions["Article"]>("", config); },
        };
    };
};
