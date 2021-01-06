import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

export interface AxiosModuleInstance extends AxiosInstance {
    append: (uri: string) => AxiosModuleInstance;
}

const axiosModule = function (config?: AxiosRequestConfig): AxiosModuleInstance {
    const instance = axios.create(config);
    const append = (instance: AxiosInstance) => {
        return (uri: string): AxiosModuleInstance => {
            return axiosModule({
                ...instance.defaults,
                baseURL: (instance.defaults.baseURL || "") + uri,
            });
        };
    };
    return Object.assign({},
        instance,
        {
            append: append(instance),
        });
};

export default axiosModule;
