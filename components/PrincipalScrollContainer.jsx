import Header from '../components/Header'
import NavBar from '../components/NavBar'
import CanvaEmbed from '../components/CanvaEmbed'
import QuestionFlashCard from '../components/QuestionFlashCard'
import FlashCardManager from '../components/FlashCardManager'


const PrincipalScrollContainer = () => {

    return (

        <>
            <NavBar/>
            <Header/>
            <CanvaEmbed/>
            <FlashCardManager/>
        </>
    )

}

export default PrincipalScrollContainer;