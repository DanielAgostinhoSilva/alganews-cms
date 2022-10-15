import styled from "styled-components";
import Input from "../components/Input/Input";
import ImageUpload from "../components/ImageUpload";
import MarkdownEditor from "../components/MarkdownEditor";
import TagInput from "../components/TagInput";
import {useState} from "react";
import {Tag} from "react-tag-input";
import WordPriceCounter from "../components/WordPriceCounter";
import Button from "../components/Button/Button";
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown";
import info from "../../core/utils/info";

export default function PostForm() {
    const [tags, setTags] = useState<Tag[]>([])
    const [body, setBody] = useState('')

    function handleFormSubit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        info({
            title: 'Post salvo com sucesso',
            description: 'Você acabou de salver o post'
        })
    }

    return <PostFormWrapper onSubmit={handleFormSubit}>
        <Input
            label={'título'}
            placeholder={'e.g.: Como fiquei rico apredendo React'}
        />
        <ImageUpload label={'Thumbnail do post'} />
        <MarkdownEditor onChange={setBody}/>
        <TagInput
            onAdd={tag => setTags([...tags, tag])}
            onDelete={index => setTags(tags.filter((_, i) => i !== index))}
            placeholder={'Insira as tasgs deste post'}
            tags={tags}
        />
        <PostFormSubmitWrapper>
            <WordPriceCounter
                wordsCount={countWordsInMarkdown(body)}
                pricePerWord={0.25}
            />
            <Button variant={'primary'} label={'Salvar post'} type={'submit'}/>
        </PostFormSubmitWrapper>
    </PostFormWrapper>
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px
`

const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`