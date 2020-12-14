$(document).ready(function() {

    $('form').submit(function () {
        let errors = false;
        var ime = $('#ime').val();
        var email = $('#email').val();
        var naslov = $('#naslov').val();
        var poruka = $('#poruka').val();
        var robot = $('input[name=robot]:checked');

         if (robot.length == 0) {
            errors = true;
             $('.errors').html('Molimo vas da odgovorite na pitanje!');
        }

        if (poruka == '') {
            errors = true;
            $('.errors').html('Molimo vas da napišete poruku!');
        }

        if (naslov == '') {
            errors = true;
            $('.errors').html('Molimo vas da unesete naslov poruke!');
        }

        if (email == '') {
            errors = true;
            $('.errors').html('Molimo vas da unesete e-mail adresu');
        }

        if (ime == '') {
            errors = true;
            $('.errors').html('Molimo vas da unesete vaše ime');
        }

        if (errors == true) {
            return false;
        } 

        if (errors == false) {
            $('.errors').html('');
            let d = new Date();
            alert('Uspesno popunjena forma dana  ' + (d.toLocaleString('en-AU'
            )));
        }
        
    });


});