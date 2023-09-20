export const combineProviders = (providers) => {
  return ({ children }) => {
    return providers.reduce((child, Provider) => {
      return <Provider>{child}</Provider>;
    }, children);
  };
};
