"use client";

import {
  Card,
  Heading,
  Text,
  Textarea,
  Input,
  Button,
} from "@/components/ui";

interface ContentGenerationPanelProps {

  content:string;

  instruction:string;

  result?:string;

  loading?:boolean;

  error?:string | null;


  onContentChange?:(
    value:string
  )=>void;


  onInstructionChange?:(
    value:string
  )=>void;


  onGenerate?:()=>void;

}


export function ContentGenerationPanel({
  content,
  instruction,
  result,
  loading=false,
  error=null,
  onContentChange,
  onInstructionChange,
  onGenerate,
}:ContentGenerationPanelProps){

return (

<Card>

<Heading>
AI Content Generation
</Heading>


<Textarea

className="mt-4"

value={content}

onChange={(event)=>
onContentChange?.(
event.target.value
)
}

placeholder="Enter content..."

/>


<Input

className="mt-4"

value={instruction}

onChange={(event)=>
onInstructionChange?.(
event.target.value
)
}

placeholder="Instruction"

/>


<Button

className="mt-4"

loading={loading}

loadingText="Generating..."

onClick={onGenerate}

>

Generate

</Button>


{error && (

<Text className="mt-4 text-red-500">

{error}

</Text>

)}



{result && !loading && (

<div className="mt-6">

<Heading>
Result
</Heading>


<Text className="mt-2">

{result}

</Text>


</div>

)}


</Card>

);

}