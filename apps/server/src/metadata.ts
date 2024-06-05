/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [], "controllers": [[import("./modules/app.controller"), { "AppController": { "getHello": { type: String }, "getVersion": { type: String } } }], [import("./modules/health/health.controller"), { "HealthController": { "check": { type: Object } } }]] } };
};