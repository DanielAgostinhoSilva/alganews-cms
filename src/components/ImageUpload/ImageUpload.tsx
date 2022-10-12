import {mdiOpenInNew, mdiTrashCan, mdiTrashCanOutline, mdiUpload} from '@mdi/js'
import Icon from '@mdi/react'
import { ChangeEvent, useState } from 'react'
import Button from '../Button/Button'
import * as IU from './ImageUpload.styles'
import {Heading3} from "../../stories/Heading.stories";

export interface ImageUploadProps {
    label: string
}

function ImageUpload (props: ImageUploadProps) {
    const [filePreview, setFilePreview] = useState<string | null>(null)

    function handleChange (e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files![0]

        if (file) {
            const reader = new FileReader()

            reader.addEventListener('load', e => {
                setFilePreview(String(e.target?.result));
            })

            reader.readAsDataURL(file)
        }
    }

    if (filePreview)
        return <IU.ImagePreviewWrapper>
            <IU.ImagePreview preview={filePreview}>
                <IU.ButtonWrapper  onClick={() => setFilePreview(null)}>
                    <IU.ButtonLabel>
                        <span>{'Remover imagem'}</span>
                        <Icon path={mdiTrashCanOutline} size={'24px'} color={'#274060'} />
                    </IU.ButtonLabel>
                </IU.ButtonWrapper>

            </IU.ImagePreview>
        </IU.ImagePreviewWrapper>

    return <IU.Wrapper>
        <IU.Label>
            <Icon
                size={'24px'}
                path={mdiUpload}
            />
            { props.label }
            <IU.Input
                type="file"
                accept="*/*"
                onChange={handleChange}
            />
        </IU.Label>
    </IU.Wrapper>
}

export default ImageUpload