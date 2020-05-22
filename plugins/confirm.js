$.confirm = function (options) {
    return new Promise((resolve, reject) => {
        const modal = $.modal({
            title: options.title,
            closable: false,
            content: options.content,
            modalWidth: '400px',
            buttons: [
                {text: 'Удалить', type: 'danger', handler(){
                    modal.close()
                    resolve()
                    }},
                {text: 'Отмена', type: 'secondary', handler(){
                    modal.close()
                    reject()
                    }}
            ]
        })
        setTimeout(() => modal.open(), 10)
    })
}