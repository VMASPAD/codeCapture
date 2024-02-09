"use client"

import { backgrounds } from "@/utils/setTypes"
import React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
interface BackgroundSelectorProps {
    background: string
    setBackground: (background: string) => void
}

function BackgroundSelector({background,setBackground}: BackgroundSelectorProps) {

    const handleBackgroundChange = (newBackground:string) =>{
        setBackground(newBackground)
    }
  return (
    <div>
<DropdownMenu>
  <DropdownMenuTrigger>Background</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select Background</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {
        backgrounds.map((bg,i) => {
            return (
                <div
                key={i}
                onClick={() => handleBackgroundChange(bg)}
                className="w-auto h-5"
                style={{background: bg}}
                >
                
                </div>
            )
        })
    }
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default BackgroundSelector