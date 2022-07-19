import { ArrowArcLeft, ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButtom } from "../../CloseButton";

interface FeedbackContentStepProps{
    feedbackType: FeedbackType;
    onFeedbackTypeRestartRequest: () => void;
}

export function FeedbackContentStep({
    feedbackType, 
    onFeedbackTypeRestartRequest}
    : FeedbackContentStepProps) {
 
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return(
        <>
            <header>
                <button 
                    type="button" 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackTypeRestartRequest}
                    >
                        <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>
               <CloseButtom/>
            </header>  
            
            
            <div className="flex py-8 gap-2 w-full">
               
            </div>
        </>    
        )
}