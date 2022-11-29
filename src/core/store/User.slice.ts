import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {User, UserService} from "das-agnews-sdk";


export const fetchEditors = createAsyncThunk(
    'user/fetchEditors',
    async function () {
        const editors = await UserService.getAllEditors();
        return editors;
    }
)

interface UserSliceState {
    editors: User.EditorSummary[],
    fetching: boolean
}

const initialState: UserSliceState = {
    editors: [],
    fetching: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addMatcher(isPending(fetchEditors), (state) => {
                state.fetching = false;
            })
            .addMatcher(isFulfilled(fetchEditors), (state) => {
                state.fetching = true;
            })
            .addMatcher(isRejected(fetchEditors), (state) => {
                state.fetching = false;
            })
    }
})

export const userReducer = userSlice.reducer;