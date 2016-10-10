var app1 = angular.module('app1', []);
app1.controller('ctrl1', function ($scope) {

    $scope.MultiplyClick = function () {
        if ($("#Number1").val() && $("#Number2").val()) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: globalService + "/TestService",
                data: '{"Number1":' + $("#Number1").val() + ',"Number2":' + $("#Number2").val() + '}',
                processData: true,
                dataType: "json",
                success: function (response) {
                    $("#TotalCalc").text(response.d);
                },
                error: function (errormsg) {
                    alert(errormsg.responseText);
                }
            })
        } else {
            alert("Please enter something first!");
        }
    }
})


$(document).ready(function () {
    $("#Number1").blur(function () {
        if ($("#Number1").val()) {
            $("#TimesSymbol").show()
        } else {
            $("#TimesSymbol").hide()
            $("#TotalCalc").text("");
        }
    })
    $("#Number2").blur(function () {
        if ($("#Number2").val()) {
            $("#EqualsSymbol").show()
        } else {
            $("#EqualsSymbol").hide()
            $("#TotalCalc").text("");
        }
    })
})