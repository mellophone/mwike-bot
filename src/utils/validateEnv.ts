export const validateEnv = () => {
  if (!process.env.TOKEN) {
    console.warn("Missing Discord Bot Token.");
    return false;
  }

  return true;
};
