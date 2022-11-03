
$.validator.addMethod("format", function (value) {
  return value.match(/^\+?[3][7][0][0-9]{8}$/);
});

$(function () {
  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,

        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      phone: {
        required: true,
        format: true,
      },
      date1: "required",
      date2: "required",
    },
    messages: {
      firstname: "Įveskite savo vardą",
      lastname: "Įveskite savo pavardę",
      email: "Įveskite tinkamą el. pašto adresą",
      phone: {
        required: "Įveskite savo telefono numerį",
        format: "Neteisingas telefono numerio formatas",
      },
      date1: "Pasirinkite pradžios datą",
      date2: "Pasirinkite pabaigos datą",
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});
