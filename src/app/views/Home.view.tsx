import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Default";
import PostList from "../features/PostsList";
import UserPerformance from "../features/UserPerformance";
import UserTopTags from "../features/UserTopTags";
import UserEarnings from "../features/UserEarnings";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {addPost} from "../../core/store/Post.slice";

const fakePost = {
    id: 42,
    slug: "como-fazer-x-coisas-com-react-js",
    title: "Como fazer X coisas com React.js",
    imageUrls: {
        default:
            "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
        small:
            "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
        medium:
            "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
        large:
            "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
    },
    editor: {
        id: 29,
        name: "Daniel Bonifacio",
        avatarUrls: {
            default:
                "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
            small:
                "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
            medium:
                "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
            large:
                "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
        },
        createdAt: "2017-03-04T00:12:45Z",
    },
    createdAt: "2020-12-04T00:12:45-03:00",
    updatedAt: "2020-12-05T00:12:45-03:00",
    published: true,
    tags: ["JavaScript"],
    canBePublished: true,
    canBeUnpublished: true,
    canBeDeleted: true,
    canBeEdited: true,
};

export default function HomeView() {
    usePageTitle('Home')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addPost(fakePost))
    }, [dispatch])

    return <DefaultLayout>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '32px'}}>
            <ErrorBoundary component={'tags'}>
                <UserTopTags/>
            </ErrorBoundary>
            <ErrorBoundary component={'ganhos do usuário'}>
                <UserEarnings/>
            </ErrorBoundary>
        </div>
        <UserPerformance/>
        <ErrorBoundary component={'lista de posts'}>
            <PostList/>
        </ErrorBoundary>
    </DefaultLayout>
}