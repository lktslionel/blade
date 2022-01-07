/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import { BladeProvider } from '@razorpay/blade/components';
import { paymentTheme, bankingTheme } from '@razorpay/blade/tokens';
import { theme } from './manager';
import { getManagerStyles } from './manager-styles';
import { getPreviewStyles } from './preview-styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        'Guides',
        ['Intro', 'Installation', 'Usage', 'Local Development'],
        'Tokens',
        ['Colors', 'Border', 'Spacing', 'Shadows', 'Typography'],
      ],
    },
  },
  docs: {
    theme,
  },
};

export const decorators = [
  (Story, context) => {
    const getThemeTokens = () => {
      if (context.globals.themeTokens === 'paymentTheme') {
        document.head.insertAdjacentHTML(
          'beforeend',
          `<style>${getPreviewStyles({
            themeTokens: paymentTheme,
            colorScheme: context.globals.colorScheme,
          })}</style>`,
        );
        parent.document.head.insertAdjacentHTML(
          'beforeend',
          `<style>${getManagerStyles({
            themeTokens: paymentTheme,
            colorScheme: context.globals.colorScheme,
          })}</style>`,
        );
        return paymentTheme;
      }
      if (context.globals.themeTokens === 'bankingTheme') {
        document.head.insertAdjacentHTML(
          'beforeend',
          `<style>${getPreviewStyles({
            themeTokens: bankingTheme,
            colorScheme: context.globals.colorScheme,
          })}</style>`,
        );
        parent.document.head.insertAdjacentHTML(
          'beforeend',
          `<style>${getManagerStyles({
            themeTokens: bankingTheme,
            colorScheme: context.globals.colorScheme,
          })}</style>`,
        );
        return bankingTheme;
      }
      return null;
    };

    return (
      <BladeProvider
        key={`${context.globals.themeTokens}-${context.globals.colorScheme}`}
        themeTokens={getThemeTokens()}
        colorScheme={context.globals.colorScheme}
      >
        <Story />
      </BladeProvider>
    );
  },
];

export const globalTypes = {
  themeTokens: {
    name: 'Theme Tokens',
    description: 'Theme Tokens for Blade',
    defaultValue: 'paymentTheme',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: 'paymentTheme', title: 'Payment' },
        { value: 'bankingTheme', title: 'Banking' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
  colorScheme: {
    name: 'Color Scheme',
    description: 'Color Scheme for Blade',
    defaultValue: 'light',
    toolbar: {
      icon: 'eye',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'system', title: 'System' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};
