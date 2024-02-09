export const languages = [
    {
        name: "JavaScript",
        icon: "icons/javascript.svg"
    },
    {
        name: "HTML",
        icon: "icons/html5.svg"
    },
    {
        name: "TypeScript",
        icon: "icons/typescript.svg"
    },
    {
        name: "CSS",
        icon: "icons/css.svg"
    },
    {
        name: "Python",
        icon: "icons/python.svg"
    },
    {
        name: "Java",
        icon: "icons/java.svg"
    },
    {
        name: "Scss",
        icon: "icons/scss.svg"
    },
    {
        name: "Dart",
        icon: "icons/dart.svg"
    }
]

export const getExtension = (language: string) => {
    switch(language){
        case "JavaScript":
            return ".js"
        case "HTML":
            return ".html"
        case "TypeScript":
            return ".ts"
        case "CSS":
            return ".css"
        case "Python":
            return ".py"
        case "Java":
            return ".java"
        case "Scss":
            return ".scss"
        case "Dart":
            return ".dart"
        default:
            return ".js"
    }
}

export const themes = ["monokai","terminal","twilight","github","solarized_light"]

export const backgrounds = [
    "linear-gradient(354deg,#ff75b5,#ffb86c)",
    "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
    "linear-gradient(90deg,#93f9b9,#1d976c)",
    "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
    "linear-gradient(337deg,#654ea3,#da98b4)",
    "#000",
    "#fff",
    "linear-gradient(270deg,#fc6767,#ec008c)",
    "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
    "linear-gradient(270deg,#514a9d,#24c6dc)",
    "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    "linear-gradient(120deg, #d4fc79, #96e6a1)",
    "linear-gradient(60deg, #64b3f4, #c2e59c)",
    "linear-gradient(160deg, #76b852, #8dc26f)",
    "linear-gradient(200deg, #ffafbd, #ffc3a0)",
    "#34568B",
    "#99B898",
    "#FECEAB",
    "#FF847C",
    "linear-gradient(270deg, #2E3192, #1BFFFF)",
  ];
  
export const initialCode = `const print = console.log("Hola Mundo!")`