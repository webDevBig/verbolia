class Modal {

    constructor() {
        this.triggers = document.querySelectorAll( '.modal-open' );
        this.close = document.querySelectorAll( '.modal-close' );
        this.modals = document.querySelectorAll( '.modal' );
        this.modalInners = document.querySelectorAll( '.modal__inner' );
    }

    listeners() {
        window.addEventListener( 'keydown', this.keyDown );

        this.triggers.forEach( el => {
            el.addEventListener( 'click', this.openModal, false );
        } );

        this.modals.forEach( el => {
            el.addEventListener( 'transitionend', this.revealModal, false );
            el.addEventListener( 'click', this.backdropClose, false );
        } );

        this.close.forEach( el => {
            el.addEventListener( 'click', Modal.hideModal, false );
        } );

        this.modalInners.forEach( el => {
            el.addEventListener( 'transitionend', this.closeModal, false );
        } );
    }

    keyDown( e ) {
        if ( 27 === e.keyCode && document.body.classList.contains( 'modal-body' ) ) {
            Modal.hideModal();
        }
    }

    backdropClose( el ) {
        if ( ! el.target.classList.contains( 'modal-visible' ) ) {
            return;
        }

        let backdrop =  el.currentTarget.dataset.backdrop !== undefined ? el.currentTarget.dataset.backdrop : true ;

        if ( backdrop === true ) {
            Modal.hideModal();
        }
    }

    static hideModal() {
        let modalOpen = document.querySelector( '.modal.modal-visible' );

        modalOpen.querySelector( '.modal__inner' ).classList.remove( 'modal-reveal' );
        document.querySelector( '.modal-body' ).addEventListener( 'transitionend', Modal.modalBody, false );
        document.body.classList.add( 'modal-fadeOut' );
    }

    closeModal( el ) {
        if ( 'opacity' === el.propertyName && ! el.target.classList.contains( 'modal-reveal' ) ) {
            document.querySelector( '.modal.modal-visible' ).classList.remove( 'modal-visible' );
            const customModal = el.target.parentElement;
            if(customModal.classList.contains('blacklist')) {
                const switchList = customModal.querySelectorAll('.switch input');
                let countProducts = 0;
                switchList.forEach(item => {
                    if(item.checked) {
                        countProducts ++;
                    }
                });
                switch (countProducts) {
                    case 0:
                        document.querySelector('p.blackList-text span.count').innerHTML = "No products";
                        break;
                    case 1:
                        document.querySelector('p.blackList-text span.count').innerHTML = `${countProducts} product`;
                        break;
                    default:
                        document.querySelector('p.blackList-text span.count').innerHTML = `${countProducts} products`;
                        break;
                }
            }
            if(customModal.classList.contains('upload-keyword-file')) {
                const fileName = customModal.querySelector('.field-upload-file p.file').innerHTML;
                const id = customModal.getAttribute('id');
                document.querySelector(`.include-keyword-file[data-upload-file="${id}"] .file`).innerHTML = fileName;

                const includeKeywordFile = document.querySelector('.include-keyword-file');
                console.log(includeKeywordFile);
                if(includeKeywordFile) {
                    includeKeywordFile.querySelector('a.remove').addEventListener('click', e => {
                        e.preventDefault();
                        const inputFile = document.querySelector(`#${id} .field-upload-file input[type="file"]`);
                        const textFileName = inputFile.parentElement.nextElementSibling;
                        inputFile.value = null;
                        textFileName.innerHTML = '';
                        document.querySelector(`.include-keyword-file[data-upload-file="${id}"] .file`).innerHTML = '';
                    });
                }
            }
        }
    }

    openModal( el ) {
        let version;
        if ( ! el.currentTarget.dataset.modal ) {
            console.error( 'No data-modal attribute defined!' );
            return;
        }

        let modalID = el.currentTarget.dataset.modal;
        let modal = document.getElementById( modalID );

        if(el.currentTarget.dataset.version) {
            version = el.currentTarget.dataset.version;
            modal.querySelector('#copy-version').setAttribute('value', version);
        }

        document.body.classList.add( 'modal-body' );
        modal.classList.add( 'modal-visible' );
    }

    revealModal( el ) {
        if ( 'opacity' === el.propertyName && el.target.classList.contains( 'modal-visible' ) ) {
            el.target.querySelector( '.modal__inner' ).classList.add( 'modal-reveal' );
        }
    }

    static modalBody( el ) {
        if ( 'opacity' === el.propertyName && el.target.classList.contains( 'modal' ) && ! el.target.classList.contains( 'modal-visible' ) ) {
            document.body.classList.remove( 'modal-body', 'modal-fadeOut' );
        }
    }

}
