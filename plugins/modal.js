function _createModal(options) {
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div')
    const modalCloseElement = options.closable ? `<span class="modal-close">&times;</span>` : ''
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window" style = "width: ${options.modalWidth || DEFAULT_WIDTH}">
            <div class="modal-header">
                <span class="modal-title">${options.title || 'Modal window'}</span>
                ${modalCloseElement}
            </div>
            <div class="modal-body">
                ${options.content || ''}
            </div>
            <div class="modal-footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
    `)


    document.body.appendChild(modal)
    return modal
}



$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false

    return {
        open() {
            !closing && $modal.classList.add('open')
            const moladClose = $modal.querySelector('.modal-close')
            const modalOverlay = $modal.querySelector('.modal-overlay')
            document.body.addEventListener('click', event => {
                const target = event.target
                console.log(event)
                if (target.className === 'modal-close' || target.className === 'modal-overlay') {
                    this.close()
                }
            })
        },
        close() {
            closing = true
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('open')
                closing = false
            }, ANIMATION_SPEED)
        },
        destroy() {

        }
    }
}



