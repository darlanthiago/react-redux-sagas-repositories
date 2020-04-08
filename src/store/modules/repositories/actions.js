export function addRepoRequest(newRepo) {
    return {
        type: '@repo/ADD_REQUEST',
        payload: { newRepo }
    };
}

export function addRepoSuccess(repos) {
    return {
        type: '@repo/ADD_SUCCESS',
        payload: { repos }
    };
}