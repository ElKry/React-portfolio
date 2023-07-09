import { EDUCATION, WORK } from "../../constants/workHistory";

export const getEducation = async () => {
  return new Promise((resolve,) => {
    setTimeout(() => {
      resolve(EDUCATION);
    }, 1000);
  });
};

export const getWork = async () => {
  return await Promise.resolve(setTimeout(() => WORK, 100));
};
