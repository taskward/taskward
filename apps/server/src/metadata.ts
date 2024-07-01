/* eslint-disable */
export default async () => {
    const t = {
        ["./shared/enums/sort-column-key.enum"]: await import("./shared/enums/sort-column-key.enum"),
        ["./shared/enums/sort-order.enum"]: await import("./shared/enums/sort-order.enum"),
        ["./modules/users/vo/user.vo"]: await import("./modules/users/vo/user.vo")
    };
    return { "@nestjs/swagger": { "models": [[import("./shared/class/page/page.dto"), { "PageDto": { page: { required: true, type: () => Number, default: 1, minimum: 1 }, pageSize: { required: true, type: () => Number, default: 10, minimum: 1 }, keywords: { required: false, type: () => String }, startTime: { required: false, type: () => String }, endTime: { required: false, type: () => String }, sortColumnKeys: { required: true, enum: t["./shared/enums/sort-column-key.enum"].SortColumnKey, isArray: true }, sortOrders: { required: true, enum: t["./shared/enums/sort-order.enum"].SortOrder, isArray: true }, orderBy: { required: false, type: () => [Object], description: "Prisma \u6392\u5E8F\u5BF9\u8C61\u6570\u7EC4" }, sort: { required: false, description: "MongoDB \u6392\u5E8F\u6570\u7EC4" } } }], [import("./shared/class/page/page.vo"), { "Page": { page: { required: true, type: () => Number }, pageSize: { required: true, type: () => Number }, total: { required: true, type: () => Number }, records: { required: true } } }], [import("./shared/class/res/resource.vo"), { "ResourceVo": { createdAt: { required: true, type: () => Date }, createdBy: { required: false, type: () => Number }, updatedAt: { required: true, type: () => Date }, updatedBy: { required: false, type: () => Number } } }], [import("./modules/users/dto/create-user.dto"), { "CreateUserDto": { username: { required: true, type: () => String, minLength: 4, maxLength: 16 }, nickName: { required: true, type: () => String, maxLength: 16 }, password: { required: true, type: () => String, minLength: 6, maxLength: 16, pattern: "/[0-9]/" } } }], [import("./modules/users/vo/user.vo"), { "UserVo": { id: { required: true, type: () => Number }, username: { required: true, type: () => String }, nickName: { required: true, type: () => String }, phoneNumber: { required: false, type: () => String }, email: { required: false, type: () => String }, firstName: { required: false, type: () => String }, middleName: { required: false, type: () => String }, lastName: { required: false, type: () => String }, avatarUrl: { required: false, type: () => String }, gender: { required: false, type: () => String }, country: { required: false, type: () => String }, province: { required: false, type: () => String }, city: { required: false, type: () => String }, address: { required: false, type: () => String }, biography: { required: false, type: () => String }, website: { required: false, type: () => String }, profile: { required: false, type: () => String }, birthDate: { required: false, type: () => Date }, enabled: { required: true, type: () => Boolean }, authFlag: { required: true, type: () => Boolean } } }], [import("./modules/users/vo/page-user.vo"), { "PageUserVo": { records: { required: true, type: () => [t["./modules/users/vo/user.vo"].UserVo] } } }], [import("./modules/auth/dto/login.dto"), { "LoginDto": { username: { required: true, type: () => String, minLength: 4, maxLength: 16 }, password: { required: true, type: () => String, minLength: 6, maxLength: 16 } } }], [import("./modules/auth/dto/refresh.dto"), { "RefreshDto": { token: { required: true, type: () => String } } }], [import("./modules/users/dto/page-user.dto"), { "PageUserDto": { id: { required: false, type: () => Number }, enabled: { required: false, type: () => Boolean } } }], [import("./modules/users/dto/update-user.dto"), { "UpdateUserDto": { username: { required: true, type: () => String, minLength: 4, maxLength: 16 }, nickName: { required: true, type: () => String, maxLength: 16 }, phoneNumber: { required: false, type: () => String, maxLength: 25 }, email: { required: false, type: () => String, maxLength: 50 }, firstName: { required: false, type: () => String, maxLength: 10 }, middleName: { required: false, type: () => String, maxLength: 10 }, lastName: { required: false, type: () => String, maxLength: 10 }, avatarUrl: { required: false, type: () => String, maxLength: 100 }, gender: { required: false, type: () => String, maxLength: 10 }, country: { required: false, type: () => String, maxLength: 25 }, province: { required: false, type: () => String, maxLength: 25 }, city: { required: false, type: () => String, maxLength: 25 }, address: { required: false, type: () => String, maxLength: 100 }, biography: { required: false, type: () => String, maxLength: 500 }, website: { required: false, type: () => String, maxLength: 50 }, profile: { required: false, type: () => String, maxLength: 50 }, birthDate: { required: false, type: () => Date }, enabled: { required: false, type: () => Boolean }, authFlag: { required: false, type: () => Boolean } } }], [import("./modules/users/dto/patch-user.dto"), { "PatchUserDto": { username: { required: false, type: () => String, minLength: 4, maxLength: 16 }, nickName: { required: false, type: () => String, maxLength: 16 } } }], [import("./modules/auth/dto/signup.dto"), { "SignupDto": {} }], [import("./modules/auth/vo/token.vo"), { "TokenVo": { accessToken: { required: true, type: () => String }, refreshToken: { required: true, type: () => String } } }]], "controllers": [[import("./modules/app.controller"), { "AppController": { "getVersion": { type: String } } }], [import("./modules/users/users.controller"), { "UsersController": { "create": {}, "findMany": {}, "findCurrent": {}, "findOne": {}, "update": {}, "remove": { type: Object } } }], [import("./modules/auth/auth.controller"), { "AuthController": { "signup": {}, "login": {}, "logout": {}, "forceLogout": {}, "refresh": {} } }], [import("./modules/health/health.controller"), { "HealthController": { "check": { type: Object } } }]] } };
};