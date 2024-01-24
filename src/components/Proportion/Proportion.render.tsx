import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import "./proportion.css";

import { IProportionProps } from './Proportion.config';

const Proportion: FC<IProportionProps> = ({ maxValue, barcolor, style, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState(0);
  const {
    sources: { datasource: ds },
  } = useSources();

  const [barstyle, setbarstyle] = useState({});

  //setbarstyle(`color:${barcolor};width:${value}px;`);
  // setbarstyle({ color: barcolor, width: value });

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      console.log("event changed");
      const v = await ds.getValue<number>();
      const maxv = maxValue || 1;
      const proportion = v * 100 / maxv;
      setValue(proportion);

      let color = barcolor;
      if (color === '' || color == null)
        color = 'green';
      
      setbarstyle({
        backgroundColor: color,
        width: `${proportion}%`,
      });
    };

    listener();

    ds.addListener('changed', listener);

    
    let color = barcolor;
    if (color === '' || color == null)
      color = 'green';
    
    setbarstyle({
      backgroundColor: color,
      width: `${value}%`,
    });
    

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div style={barstyle} className="proportionInside"></div>
    </div>
  );
};

export default Proportion;
