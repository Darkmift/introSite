import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './page';

const meta = {
  title: 'App/Pages/Home',
  component: AboutPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <body>
        <Story />
      </body>
    ),
  ],
} as Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
