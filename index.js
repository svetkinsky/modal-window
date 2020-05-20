const content = `<p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>`
const options = {
    title: 'My modal title',
    closable: true,
    content: content,
    modalWidth: '400px',
    buttons: [
        {text: 'OK', type: 'primary', handler(){
                console.log('Primary btn is clicked')
                modal.close()
            }},
        {text: 'Cancel', type: 'danger', handler(){
                console.log('Danger btn is clicked')
                modal.close()
            }}
    ]
}
const modal = $.modal(options)
