import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  documents: "pages/**/*.vue",
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
  hooks: {
    afterOneFileWrite: ["eslint --fix"],
  },
}

export default config
