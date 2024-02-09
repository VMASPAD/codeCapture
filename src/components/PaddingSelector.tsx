"use client"

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

interface PaddingSelectorProps {
    paddings: string[]
    currentPadding: string
    setCurrentPadding: (padding: string) => void
}  

function PaddingSelector({paddings,currentPadding,setCurrentPadding} : PaddingSelectorProps) {
    const changePadding = (newPadding: string) => {
        setCurrentPadding(newPadding)
    }
  return (
    <div>
        <DropdownMenu>
  <DropdownMenuTrigger>Select Padding</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Pad</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {
        paddings.map((padding, i) => {
            return(
                <DropdownMenuItem key={i}><Button onClick={() => changePadding(padding)}>{padding}</Button></DropdownMenuItem>
            )
        })
    }
    
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default PaddingSelector