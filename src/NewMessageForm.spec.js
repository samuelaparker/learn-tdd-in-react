import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMessageForm from './NewMessageForm';

describe('<NewMessageForm />', () => {
    describe('clicking the send button', () => {
        async function sendMessage() {
            render(<NewMessageForm />);

            await userEvent.type(
                screen.getByTestId('messageText'),
                'New message',
            );
            userEvent.click(screen.getByTestId('sendButton'));
        }

        it('clears the text field', async () => {
            await sendMessage();
            expect(screen.getByTestId('messageText').value).toEqual('');
        });

        it('calls the send handler', async () => {
            await sendMessage();
            expect(sendHandler).toHaveBeenCalledWith('New message');
        })
    });
});