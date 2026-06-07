import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TextEllipse } from './directives/text-ellipse.directive';
import { Masking } from './directives/masking.directive';

const meta: Meta = {
  title: 'Utilities/Directives',
  decorators: [
    moduleMetadata({
      imports: [TextEllipse, Masking],
    })
  ]
};

export default meta;
type Story = StoryObj;

export const TextEllipseStory: Story = {
  name: 'Text Ellipse',
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 200px; border: 1px solid #ccc; padding: 1rem;">
        <p [ihTextEllipse]="multi" [lines]="lines">
          This is a very long text that will be truncated according to the number of lines specified in the input properties.
          It demonstrates how the directive manages both single-line and multi-line clamping.
        </p>
      </div>
    `,
  }),
  args: {
    multi: true,
    lines: 2,
  }
};

export const MaskingStory: Story = {
  name: 'Masking (Phone)',
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem;">Phone Number (000) 000-0000:</label>
        <input type="text" [ihMasking]="mask" placeholder="(000) 000-0000" style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
      </div>
    `,
  }),
  args: {
    mask: '(000) 000-0000'
  }
};