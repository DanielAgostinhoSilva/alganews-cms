import withBoundary from "../../core/hoc/withBoundary";
import styled from "styled-components";
import MarkdownEditor from "../components/MarkdownEditor";

interface PostPreviewProps {
    postId: number
}

function PostPreview(props: PostPreviewProps) {
    return <Wrapper>
        features/PostPreview
        <MarkdownEditor
            readonly={true}
            value={'## ola mundo\n- esta é uma lista'}
        />
    </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 655px;
  background-color: #F3F8FA;
  border: 1px solid #ccc;
  padding: 24px;
`

export default withBoundary(PostPreview)