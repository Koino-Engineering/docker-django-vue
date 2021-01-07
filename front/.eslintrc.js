const warn = process.env.NODE_ENV === "development" ? "warn" : "error";

module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "@vue/standard",
        "@vue/typescript/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "@typescript-eslint/no-explicit-any": warn,
        "@typescript-eslint/no-unused-vars": "error",
        "arrow-body-style": ["error", "always"],
        "block-spacing": "error",
        indent: ["error", 4, { SwitchCase: 1 }],
        "linebreak-style": ["error", "unix"],
        "no-console": warn,
        "no-debugger": warn,
        "no-loop-func": "error",
        "no-throw-literal": "error",
        "no-unused-vars": "off",
        "object-curly-spacing": ["error", "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        semi: ["error", "always"],
        "comma-dangle": ["error", "always-multiline"],
        camelcase: "off",
        "@typescript-eslint/camelcase": "off",
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                jest: true,
            },
        },
    ],
};
