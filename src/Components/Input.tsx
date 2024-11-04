import {ChangeEvent, useState} from "react";

export function Input({inputId, value, onChange}: {
    inputId: string,
    value: string,
    onChange: (event: ChangeEvent) => void
}) {
    const [withoutLabel, setWhitoutLabel] = useState<string>('')
    return (
        <div>
            <label className='absolute px-2 text-zinc-600' htmlFor={inputId}>
                {value ? withoutLabel : 'Digite aqui'}
            </label>
            <input className='border border-text rounded focus:border-transparent' onChange={(event) => {
                onChange(event);
                setWhitoutLabel('')
            }} value={value} type='text'
                   id={inputId}/>
        </div>

    )
}