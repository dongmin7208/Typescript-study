// index signature
type CountryCodes = {
  [key: string]: string;
};

// index signature
let countryCodes: CountryCodes = {
  Korea: "KR",
  USA: "US",
  China: "CN",
};

type CountryNumberCodes = {
  [key: string]: number;
  // Korea: number;
  // Korea: string;
};

let countryNumberCodes: CountryNumberCodes = {
  // Korea : 410,
  // UnitedStates : 840,
  // UnitedKingdom : 826,
};

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: Date;
  bio: string;
  location: string;
};

// 타입 별칭
let user: User = {
  id: 1,
  name: "name",
  nickname: "nickname",
  birth: new Date(),
  bio: "hello",
  location: "seoul",
};
// 타입 별칭
let user2: User = {
  id: 1,
  name: "name",
  nickname: "nickname",
  birth: new Date(),
  bio: "hello",
  location: "seoul",
};
