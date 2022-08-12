import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.modelOverview': '模型管理',
  'menu.modelOverview.detail': '模型概览',
  'menu.importModel': '导入模型',
  'menu.modelDeploy': '模型部署',
  'menu.modelDeploy.addService': '添加服务',
  'menu.modelList': '模型列表',
  'menu.deploy': '详细部署页面',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
};