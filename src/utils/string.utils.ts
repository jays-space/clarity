const splitAndJoin = (string: string, splitOn: string, joinOn: string) => {
  if (!string) throw new Error("Invalid string");
  if (!splitOn || !joinOn) throw new Error("Invalid split or join");
  return string.split(splitOn).join(joinOn);
};

const getString = (name: string) => {
  let arr = name.split(" ");
  arr.shift();
  return arr.join(" ");
};

const stringUtils = { splitAndJoin, getString };

export default stringUtils;
