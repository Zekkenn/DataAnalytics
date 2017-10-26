var evaluarMateria = (function () {

    return {

        loadMaterias : function () {
            console.log("testing");
            $.get("/evaluate/currentAsignatures",
                    function (data) {
                        console.log("LookingFor Asignatures");
                        console.log("Adding Asignatures");
                        console.log(data);
                        for (var i = 0, len = data.length; i < len; i++) {
                            $('#materias').append("<option value='" + data[i] + "'>");
                        }
                    }
            ).fail(
                    function (data) {
                        alert(data["responseText"]);
                    }

            );
        }

    };

})();


