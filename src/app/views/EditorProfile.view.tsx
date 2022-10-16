import DefaultLayout from "../layouts/Default";
import EditorProfile from "../features/EditorProfile";

function EditorProfileView() {
    return <DefaultLayout>
        <EditorProfile hidePersonalData={true}/>
    </DefaultLayout>
}

export default EditorProfileView