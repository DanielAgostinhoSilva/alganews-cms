import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Default";
import PostList from "../features/PostsList";
import UserPerformance from "../features/UserPerformance";
import UserTopTags from "../features/UserTopTags";


export default function Home() {
    usePageTitle('Home')

    return <DefaultLayout>
        <UserTopTags />
        <UserPerformance />
        <PostList />
    </DefaultLayout>
}