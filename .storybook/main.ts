import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    "../projects/ih-ng-notification/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../projects/ih-ng-css-utility/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../projects/ih-utils/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
    "@storybook/addon-storysource"
  ],

  framework: {
    name: "@storybook/angular",
    options: {},
  },

  docs: {
    autodocs: true
  }
};
export default config;
