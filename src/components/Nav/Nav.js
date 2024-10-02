import { useNavigate } from 'react-router-dom';
import {Button, Container} from './Navstyled';

export const Nav=({onClose, isOpen, grid, isHome, isStyle})=>{
    const navigator = useNavigate(); 

    const handleNewsClick = () => {
        navigator('news');     
        if (isOpen) {
            onClose();
        }
    };

    const handdleNoticesClick=()=>{
        navigator('notices');     
        if (isOpen) {
            onClose();
        }
    }

    const handleFriendsClick=()=>{
        navigator('friends');
        if (isOpen) {
            onClose();
        }
    }

    return(
            <Container $grid={grid}>
                <Button $isHome={isHome}  type='button' onClick={handleNewsClick}>News</Button>
                <Button $isHome={isHome}  type='button' onClick={handdleNoticesClick}>Find pet</Button>
                <Button $isHome={isHome}  type='button' onClick={handleFriendsClick}>Our friends</Button>
            </Container>   
    )
}