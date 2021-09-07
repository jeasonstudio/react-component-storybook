import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DemoComponent, IDemoComponentProps } from './DemoComponent';

const meta: Meta = {
  title: 'Demo Component',
  component: DemoComponent,
  argTypes: {
    color: { control: 'color' },
  },
};

export default meta;

export const Basic: Story<IDemoComponentProps> = (args) => (
  <DemoComponent {...args} />
);
Basic.args = {
  name: 'basic',
  onClick: action('onClick'),
};

export const Secondary: Story<IDemoComponentProps> = (args) => (
  <DemoComponent {...args} />
);
Secondary.args = {
  name: 'secondary',
  onClick: action('onClick'),
};
