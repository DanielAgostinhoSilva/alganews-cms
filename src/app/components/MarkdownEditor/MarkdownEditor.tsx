import MarkdownIt from 'markdown-it'
import MdEditor, {Plugins} from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'

MdEditor.unuse(Plugins.FontUnderline)

const parser = new MarkdownIt()

export interface MarkdownEditorProps {
    onChange?: (test: string) => any,
    value?: string,
    readonly?: boolean
}

export default function MarkdownEditor(props: MarkdownEditorProps) {
    return <MdEditor
        readOnly={props.readonly}
        style={{height: props.readonly ? 'auto' : 300}}
        value={props.value}
        renderHTML={text => parser.render(text)}
        onChange={({text}) => props.onChange && props.onChange(text)}
        view={props.readonly ? {
            menu: false,
            md: false,
            html: true
        } : undefined}
    />
}