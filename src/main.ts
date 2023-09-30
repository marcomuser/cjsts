import createClient from "openapi-fetch";

export const main = () => {
    const client = createClient()
    return client;
}