const {setting} = require('./dynamicPageManage-setting.js');

module.exports = {
  layout: setting.layout.table,
  title: setting.pageName.table,
  items: [
    // process.env.NODE_ENV === 'development' ?
    //   {
    //     component: 'EditList',
    //   } : { component: 'Empty' },
    {
      component: 'Search',
      config: {
        type:"default",
        fields: setting.searchFields,
      },
    },
    {
      component: 'Table',
      config: {
        API: {
          listAPI: setting.listAPI,
          deleteAPI: setting.deleteAPI,
        },
        actions: setting.tableActions,
        fields: setting.tableFields,
        operation: setting.tableOperation,
        props:{
          style:{
            "textAlign":"center"
          }
        }
      }
    },
  ],
};
