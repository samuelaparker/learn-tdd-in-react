import { useState } from "react"
export default function NewMessageForm({ onSend }) {

    const [inputText, setInputText] = useState('messageText')

    const handleInputText = (e) => {

        setInputText(e.target.value)
    }

    const handleSend = () => {
        onSend(inputText)
        setInputText('')
    }

    return (
        <>
            <input
                type="text"
                data-testid='messageText'
                onChange={handleInputText}
                value={inputText}
            />
            <button
                data-testid="sendButton"
                onClick={handleSend}
            >
            </button>
        </>
    )
}