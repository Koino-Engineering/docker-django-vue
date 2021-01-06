import axiosModule from "@/utils/axiosModule";
import Articles from "./Articles";

type ApiEnv = {
    [env in NodeJS.ProcessEnv["NODE_ENV"]]: string;
};

const BaseURL: ApiEnv = {
    development: "",
    production: "",
    test: "",
};

export default () => {
    const instance = axiosModule({
        baseURL: BaseURL[process.env.NODE_ENV],
    });
    return {
        Articles: Articles(instance),
    };
};
