"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async newProfile({ user, specializations, experience, salary }) {
    const isMaid = specializations.includes("maid");
    const isCook = specializations.includes("cook");
    const isBabySitter = specializations.includes("babysitter");
    const isElderlycare = specializations.includes("elderlycare");
    const maidProfile = await strapi.services.maid.create({
      user,
      experience,
      salary,
      isMaid,
      isCook,
      isBabySitter,
      isElderlycare,
    });
    return maidProfile;
  },
};
