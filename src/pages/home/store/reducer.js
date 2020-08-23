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
  ],
  articleList: [
    {
      id: 1,
      title: '表姐找男朋友',
      desc: '表姐今年35岁，单身，家境不太好。她读研究生时谈了一个男朋友，双方谈了将近两年就见了各自家长，都是奔着结婚去的。男的家庭条件挺不错的，人品也很得...',
      imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/5000/73fb106b57565c1d79d1a4fb359d77d716aef438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 2,
      title: '绿地事件张雨婷：折射出女人的贪婪，男人的欺骗，欲望的无度',
      desc: '虽然绿地事件已经在网络上发酵了几天，虽然现在还没有官方的正式回应，但是这个事件的社会影响力还是非常大的，因为通过这个事件所卷入的是我们大众生活中...',
      imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/5000/73fb106b57565c1d79d1a4fb359d77d716aef438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 3,
      title: '撒贝宁说：我对自己的婚姻非常失望',
      desc: '在参加一档节目中,谈到婚姻，撒贝宁公开说道：“我觉得自己的婚姻非常的无望，也没有继续维持下去的必要。”惹得现场观众大吃一惊。 事实上当时马东故意...',
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