const {app, Menu, shell} = require('electron');
const {HOMEPAGE_URL} = require('./constants');

const template = [{
  label: 'Edit',
  submenu: [{
    role: 'undo'
  }, {
    role: 'redo'
  }, {
    type: 'separator'
  }, {
    role: 'cut'
  }, {
    role: 'copy'
  }, {
    role: 'paste'
  }, {
    type: 'separator'
  }, {
    role: 'delete'
  }, {
    role: 'selectall'
  }]
}, {
  label: 'View',
  submenu: [{
    role: 'reload'
  }, {
    role: 'toggledevtools'
  }, {
    type: 'separator'
  }, {
    role: 'resetzoom'
  }, {
    role: 'zoomin'
  }, {
    role: 'zoomout'
  },{
    type: 'separator'
  }, {
    role: 'togglefullscreen'
  }]
},
{
  role: 'window',
  submenu: [{
    role: 'minimize'
  }, {
    role: 'close'
  }]
},
{
  role: 'help',
  submenu: [{
    label: 'Learn More',
    click () {
      shell.openExternal(HOMEPAGE_URL);
    }
  }]
}
];

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [{
      role: 'about'
    }, {
      type: 'separator'
    }, {
      type: 'separator'
    }, {
      role: 'hide'
    }, {
      role: 'hideothers'
    }, {
      role: 'unhide'
    }, {
      type: 'separator'
    }, {
      role: 'quit'
    }]
  });
};

const menu = Menu.buildFromTemplate(template);

module.exports = menu;
