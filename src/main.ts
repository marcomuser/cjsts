import createClient from "openapi-fetch";

export const main = () => {
    return `'createClient' is declared but its value is never read.ts(6133)
    The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("openapi-fetch")' call instead.
    To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field "type": "module" to '/Users/marco/Documents/repos/cjsts/package.json'.ts(1479)`
}