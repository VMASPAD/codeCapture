import React, { useEffect, useState } from 'react'
import AceEditor from "react-ace"

import "ace-builds/src-min-noconflict/mode-javascript"
import "ace-builds/src-min-noconflict/mode-typescript"
import "ace-builds/src-min-noconflict/mode-sql"
import "ace-builds/src-min-noconflict/mode-html"
import "ace-builds/src-min-noconflict/mode-css"
import "ace-builds/src-min-noconflict/mode-scss"
import "ace-builds/src-min-noconflict/mode-python"
import "ace-builds/src-min-noconflict/mode-dart"

import "ace-builds/src-min-noconflict/theme-monokai"
import "ace-builds/src-min-noconflict/theme-terminal"
import "ace-builds/src-min-noconflict/theme-twilight"
import "ace-builds/src-min-noconflict/theme-github"
import "ace-builds/src-min-noconflict/theme-solarized_light"
import { getExtension, initialCode } from '@/utils/setTypes'
import { Resizable } from 're-resizable'


interface CodeEditorProps {
    languaje: string;
    theme: string;
    icon: string;
    background?: string;
    currentPadding?: string
}

function CodeEditor({languaje,theme,icon,background,currentPadding} : CodeEditorProps) {

    const [width, setWidth] = useState(1000)
    const [height, setHeight] = useState<number | null>(500)
    const [title, setTitle] = useState("App")
    const [code, setCode] = useState(initialCode)

    const [extension, setExtension] = useState(".js")

    useEffect(() => {
        setExtension(getExtension(languaje))
    },[languaje])

    const handleCodeChange = (newCode: string) => {
        setCode(newCode)
    }
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value.split(".")[0]
        setTitle(newTitle)
    }
    const updateSize = () => {
        setWidth(window.innerWidth)
    }

    const handleResize = (ref : any) => {
        const newHeight = ref.style.height
        setHeight(parseInt(newHeight,10))
    }
    useEffect(() => {
        window.addEventListener("resize", updateSize)
        updateSize()
        return () => window.removeEventListener("resize", updateSize)
    })
  return (
    <>
    <Resizable
    minHeight={500}
    minWidth={550}
    maxWidth={1200}
    defaultSize={{
        width: width,
        height: height || 600
    }}
    onResize={handleResize}
    className='relative rounded-xl'
    style={{background:background}}
    >
<div className='code-block' style={{padding: currentPadding}}>
        <div
          className="handle handle-top absolute left-1/2 translate-x-[-50%] top-[-4px] w-2 h-2 
            rounded-full bg-slate-300 hover:bg-slate-50"
        ></div>
        <div
          className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
        ></div>
        <div
          className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full 
        bg-slate-300 hover:bg-slate-50 "
        ></div>
        <div
          className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
        ></div>
<div className="
            code-title h-[52px] px-4 flex items-center justify-between
            bg-black bg-opacity-80 rounded-t-xl"
   >
    <div className='input-control w-full'>
    <input type='text' value={`${title}${extension}`} onChange={(e) => handleTitleChange(e)} className='w-full text-[hsla(0,0%,100%,.6)]  outline-none font-medium 
                text-center bg-transparent' style={{lineHeight:"1.8rem"}}/>
    </div>
    <div className='flex justify-center items-center p1 bg-black bg-opacity-30 rounded-sm'>
      <img src={icon} className='w-8'/>
    </div>
</div>
    <AceEditor 
    value={code}
    name="ACE-EDITOR"
    fontSize={16}
    theme={theme}
    mode={languaje.toLocaleLowerCase()}
    showGutter={false}
    wrapEnabled={true}
    height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`}
    showPrintMargin={false}
    highlightActiveLine={false}
    editorProps={{$blockScrolling: true}}
    className='ACE-EDITOR-CONTEXT rounded-b-xl'
    onChange={handleCodeChange}
    />
    </div>
    </Resizable>
    </>
  )
}

export default CodeEditor