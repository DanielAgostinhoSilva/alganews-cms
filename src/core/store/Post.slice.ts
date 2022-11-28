import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Post, PostService} from "das-agnews-sdk";

interface PostSliceState {
    paginated?: Post.Paginated;
}

const initialState: PostSliceState = {
    paginated: {
        page: 0,
        size: 0,
        totalElements: 0,
        totalPages: 1,
        content: []
    }
}

export const fetchPosts = createAsyncThunk(
    'post/fetchPost',
    async function (query: Post.Query) {
        const post = await PostService.getAllPosts(query)
        return post
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<Post.Summary>) {
            state.paginated?.content?.push(action.payload)
        }
    }
})

export const postReducer = postSlice.reducer;
export const {addPost} = postSlice.actions;