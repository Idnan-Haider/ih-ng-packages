import { Meta, StoryObj, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { IHCssUtilityModule } from './ih-ng-css-utility.module';

const meta: Meta = {
  title: 'IH CSS Utility/Directives',
  decorators: [
    moduleMetadata({
      imports: [IHCssUtilityModule],
    }),
    componentWrapperDecorator((story) => `<div style="padding: 3rem; display: flex; justify-content: center;">${story}</div>`),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const SpacingAndBox: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div 
        ihPM [pValue]="pValue" [mValue]="mValue" 
        [ihBR]="borderRadius" 
        ihHW [hValue]="height" [wValue]="width"
        style="background: #3f51b5; color: white; border: 2px solid #1a237e; display: flex; align-items: center; justify-content: center; text-align: center; overflow: hidden;"
      >
        {{ content }}
      </div>
    `,
  }),
  args: {
    pValue: '2rem',
    mValue: '1rem',
    borderRadius: '12px',
    height: '200px',
    width: '200px',
    content: 'Interactive Box (Edit me!)',
  },
};

export const Typography: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div ihFlex flexDirection="column" gap="1rem">
        <span [ihFW]="fontWeight" [ihFS]="fontSize">
          {{ content }}
        </span>
        <hr style="width: 100%"/>
        <p>Current Weight: <b>{{fontWeight}}</b> | Current Size: <b>{{fontSize}}</b></p>
      </div>
    `,
  }),
  argTypes: {
    fontWeight: {
      options: ['100', '200', '300', '400', '500', '600', '700', '800', '900', 'bold', 'normal', 'lighter', 'bolder'],
      control: { type: 'select' },
    },
    fontSize: {
      options: ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', '2rem', '24px', '10px'],
      control: { type: 'select' },
    },
  },
  args: {
    fontWeight: '600',
    fontSize: 'xx-large',
    content: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const FlexLayout: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div ihFlex 
        [flexDirection]="flexDirection" 
        [justifyContent]="justifyContent" 
        [alignItems]="alignItems"
        style="background: #eee; width: 500px; height: 300px; border: 1px solid #ccc;"
      >
        <div ihPM pValue="1rem" style="background: #ff5722; color: white;">Item 1</div>
        <div ihPM pValue="1rem" style="background: #4caf50; color: white;">Item 2</div>
        <div ihPM pValue="1rem" style="background: #2196f3; color: white;">Item 3</div>
      </div>
    `,
  }),
  argTypes: {
    flexDirection: {
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: { type: 'radio' },
    },
    justifyContent: {
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      control: { type: 'select' },
    },
    alignItems: {
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      control: { type: 'select' },
    },
  },
  args: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};