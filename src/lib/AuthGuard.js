import { Auth } from "aws-amplify";

export const authGuard = async (to, from, next) => {
  const info = await Auth.currentUserInfo();

  // console.log({info});

  if (!info) {
    return next({
      path: "/auth",
      query: {
        redirect: to.fullPath
      }
    });
  }

  next();
};