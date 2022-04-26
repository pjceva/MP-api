import styled from 'styled-components';

export const Container = styled.section`

    width: 60rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 3rem auto;
    border-radius: 50px;
    background-color: lightgreen; 

    h1{
        font-size: 50px;
        margin: 0 auto;
    }

    .login{
        margin: 20px auto;
        border-radius: 20px;
        border: none;
        width: 30rem;
        height: 3rem;
        padding: 0 1rem;
        font-size: 1.5rem;
        
    }

    button{
        margin: 20px auto;
        border-radius: 20px;
        border: none;
        width: 10rem;
        height: 3rem;
        font-size: 1rem;
        background-color: lightgray;
        
    }


`;