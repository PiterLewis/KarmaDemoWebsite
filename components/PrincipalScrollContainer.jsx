import Header from '../components/Header'
import NavBar from '../components/NavBar'
import CanvaEmbed from '../components/CanvaEmbed'
import FlashCardManager from '../components/FlashCardManager'
import Carrusell from './Carrusell'
import ProblemSolution from './ProblemSolution'
import HowItWorks from './HowItWorks'
import Features from './Features'
import Formulario from './Formulario'
import VideoPlayer from './VideoPlayer'

const PrincipalScrollContainer = () => {

    return (

        <>
            <NavBar />
            <Header />
            <VideoPlayer />
            <CanvaEmbed />
            <FlashCardManager />
            <ProblemSolution />
            <HowItWorks />
            <Features />
            <Carrusell />
            <Formulario />

        </>
    )

}

export default PrincipalScrollContainer;