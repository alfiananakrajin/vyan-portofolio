import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const TemaToggle = () => {
    const [isModeGelap, setIsModeGelap] = useState(false);

    useEffect(() => {
        const simpanTema = localStorage.getItem('theme')
        if (simpanTema === 'dark') {
            setIsModeGelap(true)
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            setIsModeGelap(false)
        }
    }, [])

    const toggleTema = () => {
        if (isModeGelap) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsModeGelap(false)
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsModeGelap(true)
        }
    }

    return (
        <button onClick={toggleTema} className={cn('fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
            'focus:outline-hidden'
        )}>

        {isModeGelap ? (<Sun className="h-6 w-6 text-yellow-300" />
        ) : (<Moon className="h-6 w-6 text-blue-800" />)}
        </button>);
};