import styled from "styled-components";
import Profile from "../components/Profile";
import {User} from "../../sdk/@types/User";
import {useEffect} from "react";
import PostService from "../../sdk/services/Post.service";

export default function EditorsList() {

    useEffect(() => {
        const post = PostService.getAllPosts({})
        console.log(post)
    }, [])


    return <EditorsListWrapper>
        <Profile editorId={1} name={'Daniel'} description={'editor há 8 anos'}/>
        <Profile editorId={2} name="João Frango" description="editor há 2 anos" />
        <Profile editorId={3} name="Alex Teixeira" description="editor há 2 anos" />
        <Profile editorId={4} name="Camila Vasconcellos" description="editora há 6 anos" />
        <Profile editorId={5} name="Gabriel Freitas" description="editor há 2 meses" />
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`