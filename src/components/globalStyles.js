import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Ballet&family=Kaushan+Script&family=Ubuntu:wght@400;500&display=swap');

*, body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background:#edf2f4;
    font-family: 'Lato', sans-serif;
    color: #edf2f4;
}

button{
    background:transparent;
    border: none; /* Green background */
    color: #edf2f4;
    padding: 0.7rem 1.5rem;
    cursor: pointer;
}

a{
    text-decoration: none;
    color: #051923;
}
`;

export default GlobalStyle;