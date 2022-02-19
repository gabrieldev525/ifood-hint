// Third party
import { Draft, produce } from 'immer'

// Local
import { ProductTypes } from './types'

const state_default = {
  name: 'Produto 1',
  description: 'Produto 1'
}

export default (state = state_default, action) => {
  return produce(state, (draft: Draft<any>) => {
    switch(action.type) {
      case ProductTypes.FETCH_PRODUCT:
        return {
          ...draft,
          ...action.payload
        }
      default:
        return draft
    }
  })
}