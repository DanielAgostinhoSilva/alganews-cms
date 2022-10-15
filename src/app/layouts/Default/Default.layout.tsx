import * as DL from './Default.layouts.styles'
import Navbar from "../../components/NavBar/Navbar";

interface DefaultLayoutProps {
    children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps) {
    return <DL.Wrapper>
        <DL.Header>
            header
        </DL.Header>
        <DL.Main>
            <DL.Navigation>
                <Navbar></Navbar>
            </DL.Navigation>
            <DL.FeaturedContent>
                {props.children}
            </DL.FeaturedContent>
            <DL.Aside>
                Aside
            </DL.Aside>
        </DL.Main>
    </DL.Wrapper>
}

export default DefaultLayout