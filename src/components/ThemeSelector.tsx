"use client"

import { themes } from '@/utils/setTypes'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import { Button } from "@/components/ui/button"

  interface ThemeSelectorProps {
    theme: string
    setTheme: (theme: string) => void
  }

function ThemeSelector({theme, setTheme}: ThemeSelectorProps) {

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme)
    }
  return (
    <>
<DropdownMenu>
  <DropdownMenuTrigger>Colors</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Backgrounds</DropdownMenuLabel>
    <DropdownMenuSeparator />
{
    themes.map((theme, i) => {
        return (

    <DropdownMenuItem key={i}>
        <Button  onClick={() => handleThemeChange(theme)}>
            {theme}
            </Button>        
        </DropdownMenuItem>
        )
    }
    )
}

  </DropdownMenuContent>
</DropdownMenu>

    </>
  )
}

export default ThemeSelector