< script type = "text/javascript" >

    document.querySelector('.tugma').addEventListener('click', function() {
        var ekran = document.querySelector('.ekran');
        console.log(typeof parseInt(ekran.value));
        ekran.value = parseInt(ekran.value) + 1;
    }); <
/script>