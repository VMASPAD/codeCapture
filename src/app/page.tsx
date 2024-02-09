"use client"
import BackgroundSelector from "@/components/BackgroundSelector";
import CodeEditor from "@/components/CodeEditor";
import LanguajeSelector from "@/components/LanguajeSelector";
import PaddingSelector from "@/components/PaddingSelector";
import ThemeSelector from "@/components/ThemeSelector";
import { Button } from "@/components/ui/button";
import { backgrounds, languages, themes } from "@/utils/setTypes";
import html2canvas from "html2canvas";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Footer from "@/components/Footer";

export default function Home() {
  const editorRef = useRef(null)
  
  const [language, setLanguage] = useState(languages[0].name)
  const [theme, setTheme] = useState(themes[0])
  const [background, setBackground] = useState(backgrounds[0])
  const [activeIcon, setActiveIcon] = useState(languages[0].icon)
  const [paddings, setPaddings] = useState(["1rem","2rem","3rem","4rem","5rem","6rem","7rem",])
  const [currentPadding, setCurrentPadding] = useState(paddings[2])

  const exportPng = async () =>{
    const editorElement = editorRef.current

    if(editorElement){
      const handleElement = document.querySelectorAll(".handle") as any
      const cursorElement = document.querySelector(".ace_cursor") as any
      const codeTitle = document.querySelector(".code-title") as any
      const codeEditor = document.querySelector(".ace_editor") as any

      handleElement.forEach((elem: any) => {
        elem.style.display = "none"
      })
      cursorElement.style.display = "none"
      codeTitle.style.boxShadow = "none"
      codeEditor.style.boxShadow = "none"

      const canvas = await html2canvas(editorElement)
      const image = canvas
      .toDataURL("image/png")
      .replace("image/png","image/octet-stream")

      const link = document.createElement("a")
      link.download = "code.png"
      link.href = image
      link.click()

      handleElement.forEach((elem: any) => {
        elem.style.display = "block"
      })
      cursorElement.style.display = "block"
      codeTitle.style.boxshadow = "0 3px 10px rgba(0,0,0,0.2)"
      codeEditor.style.boxshadow = "2px 3px 10px rgba(0,0,0,0.2)"
    }
  }
  const exportJpg = async () =>{
    const editorElement = editorRef.current

    if(editorElement){
      const handleElement = document.querySelectorAll(".handle") as any
      const cursorElement = document.querySelector(".ace_cursor") as any
      const codeTitle = document.querySelector(".code-title") as any
      const codeEditor = document.querySelector(".ace_editor") as any

      handleElement.forEach((elem: any) => {
        elem.style.display = "none"
      })
      cursorElement.style.display = "none"
      codeTitle.style.boxShadow = "none"
      codeEditor.style.boxShadow = "none"

      const canvas = await html2canvas(editorElement)
      const image = canvas
      .toDataURL("image/jpg")
      .replace("image/jpg","image/octet-stream")

      const link = document.createElement("a")
      link.download = "code.jpg"
      link.href = image
      link.click()

      handleElement.forEach((elem: any) => {
        elem.style.display = "block"
      })
      cursorElement.style.display = "block"
      codeTitle.style.boxshadow = "0 3px 10px rgba(0,0,0,0.2)"
      codeEditor.style.boxshadow = "2px 3px 10px rgba(0,0,0,0.2)"
    }
  }
  const exportWebp = async () =>{
    const editorElement = editorRef.current

    if(editorElement){
      const handleElement = document.querySelectorAll(".handle") as any
      const cursorElement = document.querySelector(".ace_cursor") as any
      const codeTitle = document.querySelector(".code-title") as any
      const codeEditor = document.querySelector(".ace_editor") as any

      handleElement.forEach((elem: any) => {
        elem.style.display = "none"
      })
      cursorElement.style.display = "none"
      codeTitle.style.boxShadow = "none"
      codeEditor.style.boxShadow = "none"

      const canvas = await html2canvas(editorElement)
      const image = canvas
      .toDataURL("image/webp")
      .replace("image/webp","image/octet-stream")

      const link = document.createElement("a")
      link.download = "code.webp"
      link.href = image
      link.click()

      handleElement.forEach((elem: any) => {
        elem.style.display = "block"
      })
      cursorElement.style.display = "block"
      codeTitle.style.boxshadow = "0 3px 10px rgba(0,0,0,0.2)"
      codeEditor.style.boxshadow = "2px 3px 10px rgba(0,0,0,0.2)"
    }
  }

  return (
    <>
    <main className="h-[100xh] flex flex-col items-center justify-center">
      <header className="flex items-center gap-10 mt-10">
        <LanguajeSelector 
        language={language}
        setLanguage={setLanguage}
        setActiveIcon={setActiveIcon}
        />

        <ThemeSelector theme={theme} setTheme={setTheme}/>

        <BackgroundSelector background={background} setBackground={setBackground}/>

        <PaddingSelector paddings={paddings} currentPadding={currentPadding} setCurrentPadding={setCurrentPadding}/>

        <DropdownMenu>
  <DropdownMenuTrigger>Select Export</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Type</DropdownMenuLabel>
    <DropdownMenuSeparator />
<DropdownMenuItem><Button onClick={exportPng}>PNG</Button></DropdownMenuItem>
<DropdownMenuItem><Button onClick={exportJpg}>JPG</Button></DropdownMenuItem>
<DropdownMenuItem><Button onClick={exportWebp}>WEBP</Button></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

      </header>
              <div className="code-editor-ref mt-[16rem]" ref={editorRef}>
        <CodeEditor languaje={language} theme={theme} background={background} icon={activeIcon} currentPadding={currentPadding}/>
        </div>
    </main>
    <Footer />
    </>
  );
}
