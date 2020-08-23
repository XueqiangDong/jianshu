import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/5000/73fb106b57565c1d79d1a4fb359d77d716aef438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/5000/73fb106b57565c1d79d1a4fb359d77d716aef438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state
  }
}