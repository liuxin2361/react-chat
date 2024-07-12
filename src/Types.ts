export interface InitialUserState { 
    user: null | {
        uid: string,
        email: string,
        photo: string,
        displayName: string,
    }
}