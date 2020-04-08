import produce from "immer";

const INITIAL_STATE = [];

export default function repositories(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@repo/ADD_SUCCESS':
            return produce(state, draft => {
                draft.push(action.payload.repos);
            });

        default:
            return state;
    }
}