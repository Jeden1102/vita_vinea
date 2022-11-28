import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mapPoints: [],
    },
    mutations: {
        addPoint(state, point) {
            state.mapPoints.push({ position: point })
        },
        removePoint(state, idx) {
            console.log('tak')
            state.mapPoints.splice(idx, 1)
        }
    },
    actions: {

    },
})