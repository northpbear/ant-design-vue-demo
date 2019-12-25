export default {
  getAuth(context) {
    let auth = "admin"; //这里应该是一个异步 从服务器拉数据
    context.commit("rememberAuth", auth);
  }
};
