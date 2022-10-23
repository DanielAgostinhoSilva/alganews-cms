import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Default";
import PostList from "../features/PostsList";
import UserPerformance from "../features/UserPerformance";
import UserTopTags from "../features/UserTopTags";
import UserEarnings from "../features/UserEarnings";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";


export default function HomeView() {
    usePageTitle('Home')

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