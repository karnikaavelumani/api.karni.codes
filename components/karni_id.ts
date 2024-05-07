export function KarniID(): Karni {
  return karni;
}

export type Karni = typeof karni;

const karni = {
  identifier: "karnikaavelumani",
  name: "Karni",
  url: ["https://i.karni.codes"],
  email: ["mailto:karnivelu@outlook.com"],
  height: "5'6",
  gender: ["female"],
  pronouns: ["she/her"],
  birthDate: "2001-02-22",
  knowsLanguage: ["en", "ta"],
  description: "My name is Karnikaa Velumani, but you can call me Karni!",
  sameAs: [
    "https://github.com/karnikaavelumani",
  ],
} as const;
