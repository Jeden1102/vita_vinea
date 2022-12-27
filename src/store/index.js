import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mapPoints: [],
        center: [51, 51],
        calculationData: {
            spaceRow: '',
            spacePlant: '',
            spacePall: '',
            showModal: false,
            resultName: '',
        },
        results: {
            circuit: null,
            surface: null,
            rowsNumber: null
        }
    },
    getters: {
        getRowNumber(state) {
            const points = state.mapPoints.filter(el => el.base === true);
            if (points.length !== 2 || !state.calculationData.spaceRow)
                return 0;
            let i = 1;
            const lat1 = points[i].position.lat;
            const lat2 = points[i - 1].position.lat;
            const lon1 = points[i].position.lng;
            const lon2 = points[i - 1].position.lng;
            const R = 6371e3; // metres
            const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
            const φ2 = (lat2 * Math.PI) / 180;
            const Δφ = ((lat2 - lat1) * Math.PI) / 180;
            const Δλ = ((lon2 - lon1) * Math.PI) / 180;

            const a =
                Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            const d = R * c;
            return Math.ceil(d / state.calculationData.spaceRow);
        },
    },
    mutations: {
        addPoint(state, point) {
            state.mapPoints.push({ position: point, base: false })
        },
        removePoint(state, idx) {
            console.log('tak')
            state.mapPoints.splice(idx, 1)
        }
    },
    actions: {

    },
})