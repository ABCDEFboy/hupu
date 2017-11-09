/**
 * Created by Administrator on 2017/10/5.
 */
const state = {
  dateing: [],
  showType: ['nba'],
  nbaNews: [],
  chinaNewsFoot: [],
  internetFootNews: [],
  cbaNews: [],
  nbaGames: [],
  cbaGames: [],
  chinaGames: [],
  nbaVideo: [],
  cbaVideo: [],
  internetVideo: [],
  internetPhotos: [],
  nbaPhotos: [],
  cbaPhotos: [],
  nbaDeep: [],
  nbaOut: []
}

const getters = {
  showTypeing: state => state.showType[0],
  date: state => state.dateing,
  nbaNewsData: state => state.nbaNews,
  chinaNewsFootData: state => state.chinaNewsFoot,
  internetFootNewsData: state => state.internetFootNews,
  cbaNewsData: state => state.cbaNews,
  nbaGamesData: state => state.nbaGames,
  cbaGamesData: state => state.cbaGames,
  chinaGamesData: state => state.chinaGames,
  nbaVideoData: state => state.nbaVideo,
  cbaVideoData: state => state.cbaVideo,
  internetVideoData: state => state.internetVideo,
  internetPhotosData: state => state.internetPhotos,
  nbaPhotosData: state => state.nbaPhotos,
  cbaPhotosData: state => state.cbaPhotos,
  nbaDeepData: state => state.nbaDeep,
  nbaOutData: state => state.nbaOut
}
const mutations = {
  setShow (state, str) {
    state.showType = []
    state.showType.push(str)
  },
  setFirstData (state, obj) {
    state.dateing = obj.data
  },
  setData (state, obj) {
    state[obj.str] = obj.data
  },
  sendData (state, obj) {
    state.dateing = obj.data
  },
  clearData (state) {
    state.dateing = []
  }
}
export default {
  state,
  getters,
  mutations
}
