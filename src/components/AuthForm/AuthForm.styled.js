import styled from 'styled-components'

export const AuthWrapper = styled.div`
    min-height: 100vh;
    background: rgba(234, 238, 246, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
`

export const Modal = styled.div`
    width: 368px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px 60px;
    box-sizing: border-box;
    border: 0.7px solid rgba(212, 219, 229, 1);
    border-radius: 10px;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    background: #fff;
`

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #000;
    margin-bottom: 20px;
    text-align: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    position: relative;
`

export const InputWrapper = styled.div`
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 0.7px solid #d4dbe5;
    border-radius: 10px;
    background: #fff;
    font-size: 14px;

    &:focus {
        border-color: #565eef;
        outline: none;
        box-shadow: 0 0 0 2px rgba(86, 94, 239, 0.2);
    }

    &::placeholder {
        color: #94a6be;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 40px;
    margin-top: 10px;
    background: #565eef;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: #424ad0;
    }

    &:active {
        background: #3a40b5;
    }
`

export const ErrorMessage = styled.p`
    position: absolute;
    top: -22px;
    left: 0;
    right: 0;
    margin: 0;
    padding: 2px 0;
    background: #fff;
    color: #ff0000;
    font-size: 13px;
    text-align: center;
    border-radius: 4px;
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
    transition: all 0.2s ease;
    pointer-events: none;
`

export const LinkText = styled.p`
    font-size: 14px;
    color: #94a6be;
    text-align: center;
    margin-top: 20px;
`

export const Link = styled.a`
    color: #565eef;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const LinkTextUp = styled.p`
    font-size: 14px;
    color: #94a6be;
    text-align: center;
    margin-top: 20px;
`

export const LinkUp = styled.a`
    color: #565eef;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
