export interface InitialUserState { 
    user: null | {
        uid: string,
        email: string,
        photo: string,
        displayName: string,
    }
};

export interface InitialChannelState {
    channelId: string | null;
    channelName: string | null;
};