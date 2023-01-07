"use strict";
const uniqid = require("uniqid");

module.exports = {
  async roleProfile(role) {
    const rP = await strapi
      .query("role", "users-permissions")
      .findOne({ name: role }, []);
    if (!rP) {
      return false;
    }
    return rP;
  },
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

  async register(ctx) {
    const requestBody = ctx.request.body;
    // validate the request body if it has all the required fields
    let requiredFields = [
      "email",
      "mobile",
      "firstName",
      "lastName",
      "dob",
      "location",
      "pincode",
      "role",
    ];
    if (requestBody.role === "maid") {
      additionalFields = ["specializations", "experience", "salary"];
    }
    if (requestBody.role === "customer") {
      // additionalFields = ["address", "city", "state", "country"];
    }
    requiredFields = requiredFields.concat(additionalFields);
    const missingFields = requiredFields.filter((field) => !requestBody[field]);
    if (missingFields.length) {
      ctx.throw(400, `Missing fields: ${missingFields.join(", ")}`);
    }

    const mobile = requestBody.mobile.match(/\d+/g).join("");
    const username = uniqid() + uniqid();
    // const password = pwGenerator.generate({
    //   length: 12,
    //   numbers: true,
    // });
    const password = requestBody.password || "password";
    let role;
    if (requestBody.role !== "customer" || requestBody.role !== "maid") {
      const roleProfile = await this.roleProfile(requestBody.role);
      if (!roleProfile) {
        ctx.throw(400, "Invalid role");
      } else {
        role = roleProfile.id;
      }
    }
    try {
      const user = await strapi.plugins["users-permissions"].services.user.add({
        username,
        email: requestBody.email,
        mobile,
        password,
        firstName: requestBody.firstName,
        lastName: requestBody.lastName,
        dob: requestBody.dob,
        location: requestBody.location,
        pincode: requestBody.pincode,
        confirmed: true,
        blocked: false,
        role,
      });
      return await strapi.plugins["users-permissions"].services.jwt.issue({
        id: user.id,
      });
    } catch (error) {
      ctx.throw(400, error);
    }
  },
};
