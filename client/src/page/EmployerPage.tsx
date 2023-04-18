import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import OthersProfileHeader  from '../components/personalPage/OthersProfileHeader'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useLocation, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

function EmployerPage() {
    return (
        <div>
            <Navigation />
            <OthersProfileHeader  />
        </div>
    )
}

export default EmployerPage;