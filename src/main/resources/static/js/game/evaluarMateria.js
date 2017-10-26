var evaluarMateria = (function () {
    
    var updateResults = function (result) {
        document.getElementById("tercio3").innerHTML = "Tercio 3 Estimado: "+result.nota3;
        document.getElementById("rSquared").innerHTML = "Multiple R-squared : "+result.rSquared;
        document.getElementById("decision").innerHTML = result.decision;
    };
    
    return {

        loadMaterias : function () {
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
        },
        
        makeEstimate : function () {
            console.log($("#materia").val());
            console.log($("#tercio1").val());
            console.log($("#tercio2").val());
            var Materia = {nombre: $("#materia").val(), nota1 : $("#tercio1").val(), nota2 : $("#tercio2").val()};
            
            jQuery.ajax({
                url: "/evaluate/estimate",
                type: "POST",
                data: JSON.stringify(Materia),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    updateResults(result);
                }
            });
        }

    };

})();


