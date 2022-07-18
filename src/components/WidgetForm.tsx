import { CloseButtom } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'
import { useState } from "react";

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA:{
        title: 'Ideia',
        image:{
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER:{
        title: 'Outros',
        image:{
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem'
        }
    }
}


// Object.entries(feedbackTypes) =>
/**
 *[
    ['BUG', {...}],
    ['IDEA', {...}],
    ['THOUGHT', {...}]
 ]
 */

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState(null)

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >
            <header>
                <span className="text-xl leading-6 items-center">Deixe seu feedback</span>

                <CloseButtom/>
            </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key,value]) =>{
                    return(
                        <button
                         key={key}
                         className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 "
                        //  onClick={() => setFeedbackType(key)}
                         type="button"
                         
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );

                })}
            </div>

            <footer className="text-xs text-neutral-400">
             {/* Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/">Guilherme</a> */}
            </footer>
 
        </div>
    );
}