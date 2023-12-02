import { getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({local}) => ({
    messages: (await import(`./messages/${local}.json`)).default
}));