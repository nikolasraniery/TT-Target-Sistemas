import {useState} from "react";
import {Input} from "../Components/Input";

export function Question2() {
    const [inputValue, setInputValue] = useState<string>('');
    const [hasLetterA, setHasLetterA] = useState<boolean>(false);
    const [howManyLetterA, setHowManyLetterA] = useState<number>(0);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        const lowerValue = value.toLowerCase();
        const count = lowerValue.split('').filter((character: string) => character === 'a').length;
        setHowManyLetterA(count);
        setHasLetterA(count > 0);
    };

    return (
        <div className='w-full h-full flex flex-col items-center justify-center border py-8 gap-4'>
            <span>2 - Insira alguma palavra e verifique quantas letras 'A' ela possui</span>
            <Input inputId='questionTwoInput' value={inputValue} onChange={handleInputChange}/>

            {inputValue && (
                <div className='mt-4'>
                    <p>{hasLetterA ? `A letra "a" aparece ${howManyLetterA} vezes.` : 'A letra "a" não aparece no texto.'}</p>
                </div>
            )}
        </div>
    );
}
