


let BtnOpenModal = document.getElementById('BtnOpenModal')

let Modal = document.getElementById('modal_text')

let BtnCloseModal = document.getElementById('BtnCloseModal')


BtnOpenModal.addEventListener('click', () => {

    Modal.classList.add('ModalOpen')



})

BtnCloseModal.addEventListener('click', () => {

    Modal.classList.remove('ModalOpen')



})



