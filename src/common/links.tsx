import * as React from 'react';
import { FaviconSVG, IconGithubSVG } from './svg-icons';

export interface SVGIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const icons = {
  favicon: (props: SVGIconProps) => <FaviconSVG {...props} />,
};

export const links = {
  navigation: [
    {
      id: 'home',
      text: 'home',
      url: '/',
      img: '',
    },
  ],
  social: [
    {
      id: 'icon-github',
      url: 'https://github.com/princemuel',
      icon: (props: SVGIconProps) => <IconGithubSVG {...props} />,
      alt: 'github',
    },
  ],
};
