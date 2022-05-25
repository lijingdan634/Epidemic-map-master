import { get } from "../utils/request";

const api = {
  getDataInfo(params) {
    return get("http://api.tianapi.com/ncov/index", params);
  },
  getCaseNum(params){
    return get("https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5")
  },
  getProvinceCity(params) {
    return get("https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5")
  }
};

export default api;
