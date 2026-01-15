import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            // TypeScript 相关规则
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-var-requires": "error",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-empty-function": "warn",
            "@typescript-eslint/no-inferrable-types": "error",

            // React 相关规则
            "react/jsx-uses-react": "off", // Next.js 13+ 不需要导入 React
            "react/react-in-jsx-scope": "off", // Next.js 13+ 不需要导入 React
            "react/prop-types": "off", // 使用 TypeScript 替代 PropTypes
            "react/jsx-props-no-spreading": "off",
            "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
            "react/function-component-definition": [
                "error",
                {
                    namedComponents: "function-declaration",
                    unnamedComponents: "arrow-function",
                },
            ],
            "react/jsx-pascal-case": "error",
            "react/jsx-no-duplicate-props": "error",
            "react/jsx-no-undef": "error",
            "react/jsx-uses-vars": "error",
            "react/no-danger": "warn",
            "react/no-deprecated": "error",
            "react/no-direct-mutation-state": "error",
            "react/no-unknown-property": "error",
            "react/self-closing-comp": "error",

            // React Hooks 规则
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // 通用 JavaScript/TypeScript 规则
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",
            "no-alert": "error",
            "no-var": "error",
            "prefer-const": "error",
            "no-unused-expressions": "error",
            "no-duplicate-imports": "error",
            "no-multiple-empty-lines": ["error", { max: 1 }],
            "no-trailing-spaces": "error",
            "eol-last": "error",
            "comma-dangle": ["error", "always-multiline"],
            quotes: ["error", "double", { allowTemplateLiterals: true }],
            semi: ["error", "always"],
            indent: ["error", 4, { SwitchCase: 1 }],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "key-spacing": ["error", { beforeColon: false, afterColon: true }],
            "comma-spacing": ["error", { before: false, after: true }],
            "space-before-blocks": "error",
            "space-infix-ops": "error",
            "keyword-spacing": "error",
            "space-before-function-paren": [
                "error",
                {
                    anonymous: "always",
                    named: "never",
                    asyncArrow: "always",
                },
            ],

            // 代码质量规则
            complexity: ["warn", 10],
            "max-depth": ["warn", 4],
            "max-lines": ["warn", 300],
            "max-params": ["warn", 4],
            "no-magic-numbers": [
                "warn",
                {
                    ignore: [-1, 0, 1, 2],
                    ignoreArrayIndexes: true,
                    enforceConst: true,
                },
            ],

            // 安全相关规则
            "no-eval": "error",
            "no-implied-eval": "error",
            "no-new-func": "error",
            "no-script-url": "error",

            // Next.js 特定规则
            "@next/next/no-img-element": "error",
            "@next/next/no-page-custom-font": "error",
            "@next/next/no-unwanted-polyfillio": "error",

            // 可访问性规则
            "jsx-a11y/alt-text": "error",
            "jsx-a11y/anchor-has-content": "error",
            "jsx-a11y/anchor-is-valid": "error",
            "jsx-a11y/aria-props": "error",
            "jsx-a11y/aria-proptypes": "error",
            "jsx-a11y/aria-unsupported-elements": "error",
            "jsx-a11y/role-has-required-aria-props": "error",
            "jsx-a11y/role-supports-aria-props": "error",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
        // 额外忽略的文件和目录
        "node_modules/**",
        "dist/**",
        "coverage/**",
        "*.config.js",
        "*.config.mjs",
        "public/**",
    ]),
]);

export default eslintConfig;
