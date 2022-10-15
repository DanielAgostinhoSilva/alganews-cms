import styled from "styled-components";
import Input from "../components/Input/Input";
import ImageUpload from "../components/ImageUpload";
import MarkdownEditor from "../components/MarkdownEditor";
import TagInput from "../components/TagInput";
import {useState} from "react";
import {Tag} from "react-tag-input";
import WordPriceCounter from "../components/WordPriceCounter";
import Button from "../components/Button/Button";

export default function PostForm() {
    const [tags, setTags] = useState<Tag[]>([])

    return <PostFormWrapper>
        <Input
            label={'título'}
            placeholder={'e.g.: Como fiquei rico apredendo React'}
        />
        <ImageUpload label={'Thumbnail do post'} />
        <MarkdownEditor />
        <TagInput
            onAdd={tag => setTags([...tags, tag])}
            onDelete={index => setTags(tags.filter((_, i) => i !== index))}
            placeholder={'Insira as tasgs deste post'}
            tags={tags}
        />
        <PostFormSubmitWrapper>
            <WordPriceCounter wordsCount={40} pricePerWord={0.25} />
            <Button variant={'primary'} label={'Salvar post'} type={'submit'}/>
        </PostFormSubmitWrapper>
    </PostFormWrapper>
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px
`

const PostFormSubmitWrapper = styled.form`
  display: flex;
  justify-content: space-between;
`