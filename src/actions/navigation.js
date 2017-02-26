import navigationEnums from '../enums/navigation';

export function updateTypeIdx(idx) {
    return {
        type: navigationEnums.UPDATE_TYPE_IDX,
        idx
    };
}
