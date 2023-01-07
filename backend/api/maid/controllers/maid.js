'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async newMaidProfile({ user, specializations, experience, salary }) {
    const maid = await strapi.services.maid.create({
      user,
      specializations,
      experience,
      salary,
    });
    return maid;
  },
};
