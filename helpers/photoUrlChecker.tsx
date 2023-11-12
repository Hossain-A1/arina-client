export const photoUrlChecker = (url: string) => {
  if (
    url.includes(
      "images.pexels.com" ||
        "randomuser.me" ||
        "images.unsplash.com" ||
        "res.cloudinary.com"
    )
  ) {
    return true;
  } else {
    return false;
  }
};
