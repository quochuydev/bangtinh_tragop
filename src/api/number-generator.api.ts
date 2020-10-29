let initialNumber = 0;

export const generateNewNumber = (): Promise<number> => {
  const promise = new Promise<number>(resolve => {
    initialNumber += 1;
    resolve(initialNumber);
  });

  return promise;
};