const setting = require('./setting-page.json');

module.exports = {
  layout: setting.layout.table,
  // title: setting.pageName.table,
  items: [
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
      },
    },
  ],
};
