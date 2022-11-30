import {useDispatch, useSelector} from "react-redux";
import selectPaginatedPosts from "../selectors/selectPaginatedPosts";
import selectPostsFetching from "../selectors/selectPostsFetching";
import * as PostActions from '../store/Post.slice'
import {Post} from "das-agnews-sdk";

export default function usePosts() {
    const dispatch = useDispatch();

    const paginatedPosts = useSelector(selectPaginatedPosts);
    const loading = useSelector(selectPostsFetching);

    async function fetchPost(query: Post.Query) {
        dispatch(PostActions.fetchPosts(query))
    }


    return {
        paginatedPosts,
        loading,
        fetchPost
    }

}