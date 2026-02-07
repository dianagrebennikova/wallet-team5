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
    width: 379px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 32px;
    box-sizing: border-box;
    border: 0.7px solid rgba(212, 219, 229, 1);
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background: #fff;
`
export const Title = styled.h2`
    height: 29px;
    color: rgba(0, 0, 0, 1);
    font-family: Montserrat;
    font-style: Bold;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: center;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    position: relative;
`
export const InputWrapper = styled.div`
    position: relative;
`
export const Input = styled.input`
    width: 313px;
    height: 39px;
    padding: 12px;
    box-sizing: border-box;
    border: 0.5px solid rgba(153, 153, 153, 1);
    border-radius: 6px;
    background: #fff;
    font-size: 14px;

    /* Сброс фокуса */
    &:focus {
        outline: none;
    }

    /* Ошибка */
    ${({ $error }) =>
        $error &&
        `
    background: #ffebeb;
    border-color: #ff3333;
    &::placeholder {
        color: #ff3333;
    }
`}

    /* Успех */
${({ $success, $error }) =>
        $success &&
        !$error &&
        `
    background: #f0e6ff;
    border-color: #565eef;
    &::placeholder {
        color: #565eef;
    }
`}

    /* Фокус при ошибке или успехе */
&:focus {
        ${({ $error }) =>
            $error &&
            `border-color: #ff3333; box-shadow: 0 0 0 2px rgba(255, 51, 51, 0.2);`}
        ${({ $success, $error }) =>
            $success &&
            $error &&
            `border-color: #565eef; box-shadow: 0 0 0 2px rgba(86, 94, 239, 0.2);`}
    }

    &::placeholder {
        color: rgba(153, 153, 153, 1);
        font-family: Montserrat;
        font-style: Regular;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0px;
        text-align: left;
    }
`
export const Button = styled.button`
    width: 313px;
    height: 39px;
    margin-top: 12px;
    border-radius: 6px;
    background: rgba(115, 52, 234, 1);
    color: rgba(255, 255, 255, 1);
    font-family: Montserrat;
    font-style: SemiBold;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: center;
    cursor: pointer;

    &:hover {
        background: rgb(96, 26, 228);
    }

    &:active {
        background: rgb(80, 0, 230);
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
    color: rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-style: Regular;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
`
export const Link = styled.a`
    color: rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-style: Regular;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
export const LinkTextUp = styled.p`
    color: rgba(153, 153, 153, 1);
    font-family: Montserrat;
    font-style: Regular;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
`
export const LinkUp = styled.a`
    color: #565eef;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
