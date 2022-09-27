import { CloseButtom } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeSteps";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setfeedbackSent] = useState(false);

    function handleRestartFeedbanck(){
        setfeedbackSent(false); 
        setFeedbackType(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >

        { feedbackSent ? (
            <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedbanck}/>
        ) : (
            <>
                {! feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            ) : (
                <FeedbackContentStep feedbackType={feedbackType}
                onFeedbackRestartRequest={handleRestartFeedbanck}
                onFeedbackSent={() => setfeedbackSent(true)}
                />
            )} 
            </>
        )

        }
            <footer className="text-xs text-neutral-400">
             Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/" target="_blanck">Guilherme Leocadio</a>
            </footer>
 
        </div>
    );
}