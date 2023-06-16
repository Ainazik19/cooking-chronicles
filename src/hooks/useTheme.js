import { useContext } from 'react'
import { ThemeContext } from '../contex/ThemeContext'

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined){
        throw new Error("useTheme() must ne used inside ThemeProvider")
    }
    
    return context
}