import React from 'react';
import ZEle from 'zero-element';
const setting = require('./config/tagslist-setting.json');

export default function () {

  const config = {
    layout: setting.layout.table,
    title: setting.pageName.table,
    items: [
      {
        component: 'Search',
        config: {
          fields: setting.searchFields,
        },
      },
      {
        component: 'Table',
        config: {
          API: {
            listAPI: setting.listAPI,
            appendAPI: '',
            deleteAPI: setting.deleteAPI,
          },
          actions: setting.tableActions,
          fields: setting.tableFields,
          operation: setting.tableOperation,
        },
      },
    ],
  }
	return <ZEle namespace="tagslist" config={config} />
  }