import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */
import { GetListTypes } from '../Redux/GetListRedux'
import { GetDetailsTypes } from '../Redux/GetDetailsRedux'
/* ------------- Sagas ------------- */

import { getPokemonList } from './GetListSagas'
import { getPokemonDetails } from './GetDetailsSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // get pokemon list from action request redux
    takeLatest(GetListTypes.GET_LIST_REQUEST, getPokemonList, api),

    // get pokemon details from action request redux
    takeLatest(GetDetailsTypes.GET_DETAILS_REQUEST, getPokemonDetails, api)
  ])
}
