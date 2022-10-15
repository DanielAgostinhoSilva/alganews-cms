import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Default";
import PostForm from "../features/PostForm";

export default function PostCreateView() {
    usePageTitle('Novo post')
    return <DefaultLayout>
        <PostForm/>
    </DefaultLayout>
}