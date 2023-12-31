import config, { ICarousselProps } from './Caroussel.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './Caroussel.build';
import Render from './Caroussel.render';

const Caroussel: T4DComponent<ICarousselProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

Caroussel.craft = config.craft;
Caroussel.info = config.info;
Caroussel.defaultProps = config.defaultProps;

export default Caroussel;
