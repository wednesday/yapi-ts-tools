var menu = [
    {
        key:'menu_type_mode',
        name: ['使用type类型','使用interface类型'],
        defaultValue: true,
        value: true,
        id: undefined
    }
];

for (let i=0;i<menu.length;i++){ // 如果读取到的值为 null 就写入默认值
    if (GM_getValue(menu[i].value) == null){GM_setValue(menu[i].key, menu[i].defaultValue)};
}

// 注册脚本菜单
function registerMenuCommand(menuItem) {
    if(menuItem){
        menuItem.value = GM_getValue(menuItem.key);
        menuItem.id = GM_registerMenuCommand(menuItem.value?menuItem.name[0]:menuItem.name[1], function(){menu_switch(menuItem)});
    }else{
        for (let i=0;i<menu.length;i++){ // 循环注册脚本菜单
            menu[i].value = GM_getValue(menu[i].key);
            menu[i].id = GM_registerMenuCommand(menu[i].value?menu[i].name[0]:menu[i].name[1], function(){menu_switch(menu[i])});
        }
    }
}
// 注销脚本菜单
function unregisterMenuCommand(id) {
    GM_unregisterMenuCommand(id)
}

// 菜单开关
function menu_switch(menuItem) {
    if (menuItem.value == true){
        GM_setValue(menuItem.key, false);
        GM_notification({text: `${menuItem.name[0]}\n点击刷新网页后生效`, timeout: 3500, onclick: function(){location.reload();}});
    }else{
        GM_setValue(menuItem.key, true);
        GM_notification({text: `${menuItem.name[1]}\n点击刷新网页后生效`, timeout: 3500, onclick: function(){location.reload();}});
    }
    unregisterMenuCommand(menuItem.id)
    registerMenuCommand(menuItem); // 重新注册脚本菜单
};

registerMenuCommand();