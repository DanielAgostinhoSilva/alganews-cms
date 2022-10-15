import * as DL from './Default.layouts.styles'
import Navbar from "../../components/NavBar/Navbar";
import Logo from "../../components/Logo/Logo";
import SessionController from "../../components/SessionController";

interface DefaultLayoutProps {
    children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps) {
    return <DL.Wrapper>
        <DL.Header>
            <Logo/>
        </DL.Header>
        <DL.Main>
            <DL.Navigation>
                <Navbar></Navbar>
            </DL.Navigation>
            <DL.FeaturedContent>
                {props.children}
            </DL.FeaturedContent>
            <DL.Aside>
                <SessionController
                    name={'Daniel Silva'}
                    description={'editor há 2 anos'}
                />
            </DL.Aside>
        </DL.Main>
    </DL.Wrapper>
}

export default DefaultLayout