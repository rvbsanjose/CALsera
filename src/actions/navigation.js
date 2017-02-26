import navigationEnums from '../enums/navigation';

export function updateTypeIdx(typeIdx) {
    if (typeof typeIdx === 'undefined') {
        throw Error('Can\'t update presentation view without a typeIdx.');
    }

    return (dispatch, getState) => {
        let state = getState(),
            selected = state.navigation.get('typeIdx');

        if (typeIdx === selected) {
            return;
        }

        dispatch({
            type: navigationEnums.UPDATE_TYPE_IDX,
            typeIdx
        });
    };
}
