import {useState} from 'react';
import {Input} from "../Components/Input.tsx";

export function Question1() {
    const [inputValue, setInputValue] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function isASequenceFibonacciNumber() {
        const insertedNumber = parseInt(inputValue, 10);

        if (isNaN(insertedNumber) || insertedNumber < 0) {
            setMessage("Por favor, insira um número válido.");
            return;
        }

        let a = 0;
        let b = 1;

        while (b < insertedNumber) {
            const temporaryNumber = a;
            a = b;
            b = temporaryNumber + b;
        }

        if (b === insertedNumber || insertedNumber === 0) {
            setMessage(`O número ${insertedNumber} pertence à sequência de Fibonacci.`);
        } else {
            setMessage(`O número ${insertedNumber} não pertence à sequência de Fibonacci.`);
        }
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-center border py-8 gap-4'>
            <span>1 - Verifique se o número faz parte da Sequência Fibonacci</span>
            <Input
                inputId='questionOneInput'
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={isASequenceFibonacciNumber} className='mt-2 p-2 text-white border rounded'>
                Verificar
            </button>
            {message && <span className='mt-2'>{message}</span>}
        </div>
    );
}
