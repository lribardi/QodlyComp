import config, { IProportionProps } from './Proportion.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './Proportion.build';
import Render from './Proportion.render';

const Proportion: T4DComponent<IProportionProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

Proportion.craft = config.craft;
Proportion.info = config.info;
Proportion.defaultProps = config.defaultProps;

export default Proportion;
