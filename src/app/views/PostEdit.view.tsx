import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Default";
import PostForm from "../features/PostForm";

export default function PostEditView() {
    usePageTitle('Editar post')
    return <DefaultLayout>
        <PostForm/>
    </DefaultLayout>
}