import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainPage from '../pages/Main'
import AnalyticsPage from '../pages/Analytics'
import { SignInPage } from '../pages/SignIn'
import { SignUpPage } from '../pages/SignUp'
import Header from './Header/Header'
import MyExpenses from '../pages/MyExpenses'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/analytics" element={<AnalyticsPage />}></Route>
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/" element={<Navigate to="/expenses" />} />
                <Route path="/expenses" element={<MyExpenses />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
