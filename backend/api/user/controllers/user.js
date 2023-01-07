"use strict";
module.exports = {
  async login(ctx) {
    const { email, password } = ctx.request.body;
    const user = await strapi
      .query("user", "users-permissions")
      .findOne({ email });
    if (!user) {
      ctx.throw(401, "Invalid credentials");
    }
    const valid = await strapi.plugins[
      "users-permissions"
    ].services.user.validatePassword(password, user.password);
    if (!valid) {
      ctx.throw(401, "Invalid credentials");
    }
    return await strapi.plugins["users-permissions"].services.jwt.issue({
      id: user.id,
    });
  },
};
