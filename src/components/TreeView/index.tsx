import config, { ITreeViewProps } from './TreeView.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './TreeView.build';
import Render from './TreeView.render';

const TreeView: T4DComponent<ITreeViewProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

TreeView.craft = config.craft;
TreeView.info = config.info;
TreeView.defaultProps = config.defaultProps;

export default TreeView;
