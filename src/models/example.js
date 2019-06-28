
export default {

  namespace: 'example',

  state: {
    isok: false,
    tabbar: [
      {
        img: 'https://m.wukonglicai.com/images/s-yActive.png',
        title: '首页',
        className: 'active-foot',
        path:'/'
      },
      {
        img: 'https://m.wukonglicai.com/images/t-z.png',
        title: '投资',
        className: 'l-cTxt',
        path:'invest'
      },
      {
        img: 'https://m.wukonglicai.com/images/k-f.png',
        title: '空粉',
        className: 't-qTxt',
        path:'SkyPow'
      },
      {
        img: 'https://m.wukonglicai.com/images/k-f.png',
        title: '我的',
        className: 'myTxt',
        path:'mine'
      }
    ]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
