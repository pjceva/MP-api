import styled from 'styled-components';

export const Background = styled.section`

    /* background-color: lightgray; */
    display: flex;
    flex-direction: row;

`

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

`

export const SideBar = styled.section`

    background-color: gray;
    width: 20rem;
    border: none;
    border-radius: 20px;
    text-align: center;

    max-height: 27rem;

    h2{
        font-size: 30px;
        color: white;
        
    }

    p{
        padding: 1rem;
        font-size: 20px;
    }


`;