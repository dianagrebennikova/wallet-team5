// export const AuthForm = () => {
//     return <>тут будет форма для 'регистрации' и 'входа'</>
// }

// src/components/AuthForm/AuthForm.jsx

import { useState } from 'react'

import {
    AuthWrapper,
    Modal,
    Title,
    Form,
    InputWrapper,
    Input,
    Button,
    ErrorMessage,
    LinkText,
    Link,
    LinkTextUp,
    LinkUp,
} from './AuthForm.styled'

export const AuthForm = ({ isSignUp = false }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        if (!email || !password) {
            setError('Заполните все поля')
            return
        }

        if (isSignUp && !name) {
            setError('Введите имя')
            return
        }

        // Здесь будет логика входа/регистрации
        console.log('Форма отправлена:', { name, email, password })
    }

    return (
        <AuthWrapper>
            <Modal>
                <Title>{isSignUp ? 'Регистрация' : 'Вход'}</Title>

                <Form onSubmit={handleSubmit}>
                    <ErrorMessage $visible={!!error}>{error}</ErrorMessage>

                    {isSignUp && (
                        <InputWrapper>
                            <Input
                                type="text"
                                placeholder="Имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoFocus
                            />
                        </InputWrapper>
                    )}

                    <InputWrapper>
                        <Input
                            type="email"
                            placeholder="Эл. почта"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus={!isSignUp}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Input
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputWrapper>

                    <Button type="submit">
                        {isSignUp ? 'Зарегистрироваться' : 'Войти'}
                    </Button>
                </Form>

                {isSignUp ? (
                    <LinkTextUp>
                        Уже есть аккаунт?{' '}
                        <LinkUp href="/sign-in">Войдите здесь</LinkUp>
                    </LinkTextUp>
                ) : (
                    <LinkText>
                        Нужно зарегистрироваться?{' '}
                        <Link href="/sign-up">Регистрируйтесь здесь</Link>
                    </LinkText>
                )}
            </Modal>
        </AuthWrapper>
    )
}
