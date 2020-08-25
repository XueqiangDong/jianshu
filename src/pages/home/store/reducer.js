import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writers: [],
  page: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: action.data.get('topicList'),
        articleList: action.data.get('articleList'),
        recommendList: action.data.get('recommendList'),
        writers: action.data.get('writers'),
      })
    case constants.MORE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.data.get('articleList')),
        page: action.page
      })
    default:
      return state
  }
}