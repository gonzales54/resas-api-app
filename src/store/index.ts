import { createStore } from 'vuex'
import axios from 'axios'

interface prefectures {
  prefCode: number,
  prefName: string
}

interface checked {
  id: number,
  name: string,
  data: number[]
}

export default createStore({
  state: {
    prefectures_list: [] as prefectures[], 
    check_list: [] as checked[]
  },

  getters: {
    prefectures(state) {
      return state.prefectures_list
    },
    clickitem(state) {
      return state.check_list
    }
  },

  mutations: {
    setPrefecture(state, data) : void {
      state.prefectures_list = data
    },
    setClickItem(state, data) : void {
      if(!isNaN(data)){
        state.check_list = state.check_list.filter(item => item.id !== data)
      }else{
        state.check_list.push(data)
      }
    }
  },
  
  actions: {
    async prefectureAction({commit}) {
      return await axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: {
          "X-API-KEY": process.env.VUE_APP_API_KEY
        }
      })
      .then(res => {
        commit('setPrefecture', res.data.result as prefectures)
      })
      .catch(err => {
        throw err
      })
    },
    async peoplesAction({commit, state}, {num, name}) {
      const result = state.check_list.findIndex((item) => item.id === num)
      if(result !== -1){
        commit('setClickItem', num)
      }else{
        await axios.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${num}`, {
          headers: {
            "X-API-KEY": process.env.VUE_APP_API_KEY
            }
          })
        .then(res => {
          const population = (res.data.result.data[0].data.filter((item) => item['year'] % 2 === 0)).map(item => item['value'])
          commit('setClickItem', {id: num, name: name, data: population})
        })
        .catch(err => {
          throw err
        })
      }
    }
  },
  modules: {
  }
})
