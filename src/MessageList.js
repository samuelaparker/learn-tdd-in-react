const MessageList = ({ data }) => {
    return (
        <>
            <ul>
                {data.map(message => <li key={message}>{message}</li>)}
            </ul>
        </>
    )
}


export default MessageList