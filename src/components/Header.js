import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import '../css/Header.css';  

export const Header = (props) => {  
    const handleTheme = () => {
        props.toggleTheme();
    }

    return (
        <div className="header">
            <DarkModeIcon className='moon-icon icon' onClick={handleTheme}/>
            <Brightness5Icon className='sun-icon icon' onClick={handleTheme}/>
        </div>
    );
}