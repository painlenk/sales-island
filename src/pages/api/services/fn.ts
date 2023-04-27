import { init } from "@paralleldrive/cuid2";

const createId = init({
  length: 4,
});

export const generateID = () => {
  return createId();
};
