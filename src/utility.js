export const animateClipath = (duration, delay) => {
  return {
    clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
  };
};

export const truncate = (input, max) => {
  if (input.length > max) {
    return input.substring(0, max) + "...";
  }
  return input;
};
