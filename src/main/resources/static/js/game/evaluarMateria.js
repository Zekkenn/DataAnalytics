var evaluarMateria = (function () {

    return {

        loadMaterias : function () {
            console.log("testing");
            $.get("/evaluate/currentAsignatures",
                    function (data) {
                        console.log("LookingFor Asignatures");
                        console.log("Adding Asignatures");
                        for (var i = 0, len = res.length; i < len; i++) {
                            $('#materias').append("<option value='" + data.get(i) + "'>");
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


