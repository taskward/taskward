/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [], "controllers": [[import("./modules/app.controller"), { "AppController": { "getHello": { type: String }, "healthCheck": { type: String }, "getVersion": { type: String } } }]] } };
};