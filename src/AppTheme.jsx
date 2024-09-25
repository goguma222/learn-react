import './AppTheme.css';
import HeaderTheme from './theme/Header.jsx';
import MainTheme from './theme/Main.jsx';
import FooterTheme from './theme/Footer.jsx';
import { DarkModeProvider } from './context/DarkModeContext.jsx';

export default function AppTheme(props) {

  return (
    <>
        <DarkModeProvider initDarkMode={false}>
            <HeaderTheme />
            <MainTheme />
            <FooterTheme />
        </DarkModeProvider>
    </>
  );
}
