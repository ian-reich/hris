Ext.define('SMS.module.MasterHR.Department.view.grid.GridDepartment', {
    extend   : 'Ext.grid.Panel',
    store    : 'SMS.module.MasterHR.Department.store.Department',
    title    : 'Grid Department',
    iconCls  : 'icon-grid',
    alias    : 'widget.griddepartment',
    id       : 'griddepartment',
    border   : true,
    frame    : true,
    margins     : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'SMS.module.MasterHR.Department.store.Department',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode',
            dataIndex: 'kode_dept',
            width    : '35%'
        },
        {
            text     : 'Department',
            dataIndex: 'name_dept',
            width    : '35%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteDepartment },
         // { xtype: 'button', iconCls: 'icon-excel', text: 'Print', action : 'print' },
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '75%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]
});