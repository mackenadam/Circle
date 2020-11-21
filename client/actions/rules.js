import { accessRulesAPI } from '../api'

export function saveRulesToState(rules) {
    return {
        type: 'SET_RULES',
        rules: rules
    }
}

export function getRules() {
    return (dispatch) => {
        accessRulesAPI()
            .then(rulesArr => {
                dispatch(saveRulesToState(rulesArr))
            })
    }
}