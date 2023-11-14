const chatBoxes = document.querySelectorAll('.chat-box');

           
            chatBoxes.forEach(chatBox => {
                chatBox.addEventListener('click', () => {
                    
                    chatBoxes.forEach(box => box.classList.remove('active'));
                    
                    chatBox.classList.add('active');
                });
            });