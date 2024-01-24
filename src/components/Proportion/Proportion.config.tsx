import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdOutlineTextSnippet } from 'react-icons/md';

import ProportionSettings, { BasicSettings } from './Proportion.settings';

export default {
  craft: {
    displayName: 'Proportion',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      barcolor: '',
      classNames: [],
      events: [],
      maxValue: 100,
    },
    related: {
      settings: Settings(ProportionSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'Proportion',
    exposed: true,
    icon: MdOutlineTextSnippet,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['number'],
    },
  },
  defaultProps: {
    name: 'Qodly',
  },
} as T4DComponentConfig<IProportionProps>;

export interface IProportionProps extends webforms.ComponentProps {
  name?: string;
  barcolor?: string;
  maxValue?: number;
}
