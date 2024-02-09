"use client"

import { languages } from '@/utils/setTypes'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
  
interface LanguageSelectorProps {
    language: string
    setLanguage: (language: string) => void
    setActiveIcon: (icon: string) => void
}

function LanguajeSelector({language,setLanguage,setActiveIcon}: LanguageSelectorProps) {

    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage)
        const newActiveIcon = languages.find(
            (lang) => lang.name === newLanguage
        )?.icon
        if(newActiveIcon){
            setActiveIcon(newActiveIcon)
        }
    }
  return (
    <div>
<DropdownMenu>
  <DropdownMenuTrigger>Select Lenguage</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Lenguages</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {languages.map((lang,i) => {

        return (
            <DropdownMenuItem key={i}><Button onClick={() => handleLanguageChange(lang.name)}>{lang.name}</Button></DropdownMenuItem>
        )

    })
    }
    
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default LanguajeSelector