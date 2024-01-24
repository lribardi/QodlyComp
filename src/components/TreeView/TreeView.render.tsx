import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { ITreeViewProps } from './TreeView.config';

// -----------------------


function Treeline(param:any) {
  return (
    <li key={param.key} >
      {param.value}
      {param.subitems == null ? null : SubTree(param.subitems)}
    </li>
    )
}


// -------------------------


function SubTree(items: any[]) {
  return (
    <ul>
      {items.map((item) => { return Treeline(item) }) }
    </ul>
    )
}


// -------------------------


function buildTree(data: any[]) {
  return SubTree(data);
}


const TreeView: FC<ITreeViewProps> = ({ style, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState<any[]>([]);
  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<any[]>();
      setValue(v || []);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  const test = [
    { key: 'x1', value: 'item1' },
    {
      key: 'x2', value: 'item2', subitems : [
        { key: 'x2.1', value: 'item2.1' },
        { key: 'x2.2', value: 'item2.1' },
      ]
    },
    { key: 'x3', value: 'item3' },
  ]
  return (
    <div>
      {buildTree(test)}
    </div>
  );
};

export default TreeView;
