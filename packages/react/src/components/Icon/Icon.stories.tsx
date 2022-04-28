import 'twin.macro'
import { Icon, IconProps } from './Icon'
import { useCopyToClipboard } from 'react-use'

export default {
  component: Icon,
  title: 'UI/Icon',
  argTypes: {
    color: { control: 'select' },
    size: {
      defaultValue: 40,
      control: { type: 'number' },
    },
  },
}

export const Usage = (args: IconProps) => (
  <div>
    <Icon {...args} icon="BiAlarm" />
  </div>
)

export const AllIcons = () => {
  const [, copy] = useCopyToClipboard()
  return (
    <div tw="grid grid-cols-8 flex-wrap max-w-full text-slate500">
      {Icon._iconList.map((key) => {
        return (
          <div
            key={key}
            tw="flex flex-col items-center p-3 gap-2 border border-slate100 hover:(cursor-pointer)"
            onClick={() => copy(key)}
            title="Click to copy"
          >
            <Icon key={key} icon={key} size={20} />
            <span tw="max-w-full truncate text-xs font-semibold text-slate400">
              {key}
            </span>
          </div>
        )
      })}
    </div>
  )
}
