window.onload=function(){
    function onClick(){
        document.querySelector('.modal_wrap_review').style.display='block';
        document.querySelector('.black_bg').style.display='block';
    }
    function offClick(){
        document.querySelector('.modal_wrap_review').style.display='none';
        document.querySelector('.black_bg').style.display='none';
    }
        document.getElementById('modal_btn').addEventListener('click',onClick);
        document.querySelector('.modal_close_review').addEventListener('click',offClick);
    };

    function goReserve(){
        window.location.href = 'http://127.0.0.1:5502/handleReserve.html'
    }
