import { API } from '../API';

export const days_actions = {

    getDays(params) {
        const startdate = params.dates[0].toJSON().slice(0, 10)
        const enddate = params.dates[1].toJSON().slice(0, 10)
        return function (dispatch) {
            dispatch({ type: "LOADING" })
            fetch(`${API}/days/find?startdate=${startdate}&enddate=${enddate}`)
                .then(resp => resp.json())
                .then(days => dispatch({ type: "GET_DAYS", payload: days }))
        }
    },

    getSpecies() {
        return function (dispatch) {
            fetch(`${API}/species`)
                .then(resp => resp.json())
                .then(species => dispatch({ type: "GET_ALL_SPECIES", payload: species }))
        }
    }
}