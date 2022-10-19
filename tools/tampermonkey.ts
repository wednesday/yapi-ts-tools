import { runner } from "../index"
import { Propertie } from "../yapi"

type MenuItem = {
  key: string,
  name: string[],
  defaultValue: boolean,
  value: boolean,
  id?: number
}
type YapiData = {
  /** 描述 */
  desc: string,
  /** 转换后的入参 */
  req: Propertie
  /** 转换后的返回 */
  res: Propertie
  /** 转换前的入参 */
  req_body_other: string
  /** 转换前的返回 */
  res_body: string
  /** 请求路径 */
  path: string
  /** method */
  method: 'POST'|'GET'
}
const menu: MenuItem[] = [
  {
    key: 'menu_type_mode',
    name: ['使用type类型', '使用interface类型'],
    defaultValue: true,
    value: true,
    id: undefined
  }
];

// 注册脚本菜单
function registerMenuCommand(menuItem?: MenuItem) {
  if (menuItem) {
    menuItem.value = GM_getValue(menuItem.key);
    menuItem.id = GM_registerMenuCommand(menuItem.value ? menuItem.name[0] : menuItem.name[1], function () { menu_switch(menuItem) });
  } else {
    for (let i = 0; i < menu.length; i++) { // 循环注册脚本菜单
      menu[i].value = GM_getValue(menu[i].key);
      menu[i].id = GM_registerMenuCommand(menu[i].value ? menu[i].name[0] : menu[i].name[1], function () { menu_switch(menu[i]) });
    }
  }
}
// 注销脚本菜单
function unregisterMenuCommand(id: number) {
  GM_unregisterMenuCommand(id)
}

// 菜单开关
function menu_switch(menuItem) {
  if (menuItem.value == true) {
    GM_setValue(menuItem.key, false);
    GM_notification({ text: `${menuItem.name[0]}\n点击刷新网页后生效`, timeout: 3500, onclick: function () { location.reload(); } });
  } else {
    GM_setValue(menuItem.key, true);
    GM_notification({ text: `${menuItem.name[1]}\n点击刷新网页后生效`, timeout: 3500, onclick: function () { location.reload(); } });
  }
  unregisterMenuCommand(menuItem.id)
  registerMenuCommand(menuItem); // 重新注册脚本菜单
};

registerMenuCommand();


async function getYApiData(): Promise<YapiData> {
  const id = window.location.pathname.split('/')[5];
  const href = window.location.origin + '/api/interface/get?id=' + id;

  const yapiReq = await fetch(href, {
    "body": null,
    "method": "GET"
  });

  const { data } = await yapiReq.json();
  data.req = JSON.parse(data.req_body_other||'{}')
  data.res = JSON.parse(data.res_body||'{}')
  return data
}

const buttons = {
  req: document.createElement('button'),// req
  res: document.createElement('button'),// res
}
const boxContainer = document.createElement('div');
boxContainer.className = 'ts-tools';
buttons.req.className = "lucky-btn";
buttons.req.innerHTML = 'req type'
buttons.res.className = "lucky-btn";
buttons.res.innerHTML = 'res type'
boxContainer.appendChild(buttons.req)
boxContainer.appendChild(buttons.res)
buttons.req.addEventListener('click', async () => {
    const data = await getYApiData();
    if (data.method === 'GET') {
        alert('get请求暂不支持');
        return;
    }
    const name = data.path.split('/').map(p => p.charAt(0).toLocaleUpperCase() + p.slice(1)).join('') + 'Req';
    const res = runner(name, data.req, { typeMode: GM_getValue(menu[0].key) });
    console.log(res);
    navigator.clipboard.writeText(res);
    GM_notification({ text: `帮你放到剪贴板了，直接粘贴到文件吧`, timeout: 3500 });
});
buttons.res.addEventListener('click', async () => {
    const data = await getYApiData();
    const name = data.path.split('/').map(p => p.charAt(0).toLocaleUpperCase() + p.slice(1)).join('') + 'Res';
    const res = runner(name, data.res, { typeMode: GM_getValue(menu[0].key) });
    console.log(res);
    navigator.clipboard.writeText(res);
    GM_notification({ text: `帮你放到剪贴板了，直接粘贴到文件吧`, timeout: 3500 });
});
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
addGlobalStyle(`
.ts-tools {
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
}
.lucky-btn {
  font-size: 16px;
  line-height: 16px;
  border: none;
  border-radius: 4px;
  padding: 2px 4px;
  margin-bottom: 8px;
  background: rgb(127 255 212 / 50%);
  color: white;
  cursor: pointer;
}
`);
document.body.appendChild(boxContainer)