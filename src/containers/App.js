import { BrowserRouter } from "react-router-dom";
import Rotas from "../rotas/Rotas";
import { styled, createTheme, ThemeProvider } from '@mui/system';
import './App.css';

const customTheme = createTheme({
  components: {
    MyThemeComponent: {
      styleOverrides: {
        root: {
          color: 'darkslategray',
        },
        primary: {
          color: 'darkblue',
        },
        secondary: {
          color: 'darkred',
          backgroundColor: 'pink',
        },
      },
      variants: [
        {
          props: { variant: 'dashed', color: 'primary' },
          style: {
            border: '1px dashed darkblue',
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: '1px dashed darkred',
          },
        },
      ],
    },
  },
});

const MyThemeComponent = styled('div', {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) =>
    prop !== 'color' && prop !== 'variant' && prop !== 'sx',
  name: 'MyThemeComponent',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})(({ theme }) => ({
  backgroundColor: 'aliceblue',
  background: 'linear-gradient(rgba(255,255,255,0.5),transparent)',
  padding: theme.spacing(1),
}));


function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <main className="App container" style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw"
      }}>
        <MyThemeComponent  sx={{m:1}} color="primary">
          <h1>HELLO WORLD!!!!</h1>
        </MyThemeComponent>
      </main>
    </ThemeProvider>
  );
}

export default App;
