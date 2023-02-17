export const splitAndJoin = (
  string: string,
  splitOn: string,
  joinOn: string
) => {
  if (!string) throw new Error("Invalid string");
  if (!splitOn || !joinOn) throw new Error("Invalid split or join");
  return string.split(splitOn).join(joinOn);
};
