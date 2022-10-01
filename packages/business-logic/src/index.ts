export interface Dummy {
  (text: string): string;
}

export const dummy: Dummy = (text) => {
  return `dummy ${text}`;
};

export const dummy2: Dummy = (text) => {
  return `dupa ${text}`;
}
