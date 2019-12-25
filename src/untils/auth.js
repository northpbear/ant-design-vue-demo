export function getCurrentAuth() {
  return "user";
}

export function check(auths) {
  const current = getCurrentAuth();
  return auths.includes(current);
}

export function isLogin() {
  const current = getCurrentAuth();
  return current && current !== "guest";
}

// function setServeMap(routerMap) {
//     let cloneData = JSON.parse(JSON.stringify(routerMap));
//     let fathers = cloneData.filter(data => {
//         return data.pid === 0;
//     });
//     fathers.map(item => {
//         let children = cloneData.filter(child => {
//             return child.pid === item.id;
//         });
//         if (children.length >0 ){
//             item.children = children;
//         }
//     })
//     return fathers;
// }
// function setServeMap(routerMap) {
//     let cloneData = JSON.parse(JSON.stringify(routerMap));
//     return cloneData.filter(data => {
//         return data.pid === 0;
//     }).map(item => {
//         let children = cloneData.filter(child => {
//             return child.pid === item.id;
//         });
//         if (children.length >0 ){
//             item.children = children;
//         }
//     })
// }
