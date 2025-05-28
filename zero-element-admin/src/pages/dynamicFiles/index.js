import DynamicPage from '@/components/DynamicPage';
import setting from './config/checkfiles-setting.json';
// const setting = require('./config/checkfiles-setting.json');
import PublicPage from '@/components/PublicPage';
const pageConfigApi = '/forms?id=12100'

export default () => {
  // return <DynamicPage pageConfigNs={1010} pageConfigData={setting} />
  // return <DynamicPage pageConfigNs={1010} pageConfigApi={pageConfigApi} />
  return <PublicPage />;
};
