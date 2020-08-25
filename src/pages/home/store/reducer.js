import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writers: [],
  page: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: action.data.get('topicList'),
    articleList: action.data.get('articleList'),
    recommendList: action.data.get('recommendList'),
    writers: action.data.get('writers'),
  })
}

const moreList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.data.get('articleList')),
    page: action.page
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    case constants.MORE_LIST:
      return moreList(state, action)
    default:
      return state
  }
}