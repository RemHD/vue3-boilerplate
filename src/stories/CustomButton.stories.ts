import CustomButtonComponent from '@/components/CustomButton.component.vue'
import type { StoryObj } from '@storybook/vue3'

const meta = {
  title: 'CustomButton', // Nom du component
  component: CustomButtonComponent,
  tags: ['autodocs'], // Génère la documentation
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isPrimary: true,
    label: 'my custom button'
  }
}

export const Secondary: Story = {
  args: {
    isPrimary: false,
    label: 'my custom button'
  }
}

export const Disabled: Story = {
  args: {
    label: 'my disabled button',
    isDisabled: true
  }
}
