module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        // Path to your TypeScript project configuration
        sourceType: "module",
        // Set source type to module
    },
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "classProperty", // Targets class member properties
                format: ["camelCase"],
                modifiers: ["private"], // Enforces private class member properties to be prefixed with an underscore
                prefix: ["_"], // Enforces leading underscore
                trailingUnderscore: "forbid",
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE", "PascalCase"],
            },
            {
                "selector": "variable",
                "modifiers": ["destructured"],
                "format": null,
            },
        ],
        "spaced-comment": ["error", "always"],
    },
};