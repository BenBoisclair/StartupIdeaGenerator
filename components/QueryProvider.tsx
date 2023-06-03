'use client'
import { store } from '@/app/store'

const Provider = ({ children } : { children: React.ReactNode}) => {
    return (
        <Provider>
            {children}
        </Provider>
    )
}

export default Provider