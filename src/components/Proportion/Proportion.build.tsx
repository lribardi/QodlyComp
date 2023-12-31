import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { IProportionProps } from './Proportion.config';

const Proportion: FC<IProportionProps> = ({ barcolor, style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  //setbarstyle({ color: barcolor, width: 100 });

  let color = barcolor;
  if (color === '' || color == null)
    color = 'green';

  const barstyle = {
    backgroundColor: color,
    width: 100,
    display: "inline-block",
    height: 24,
  };

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div style={barstyle}></div>
    </div>
  );
};

export default Proportion;