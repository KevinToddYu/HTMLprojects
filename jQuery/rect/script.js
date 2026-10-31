$(document).ready(
    function () {
        function changeColor() {
            $("#square").css("background-color", "red");
        }

        function moveSquare() {
            $("#square").animate({left : '350px'})
        }

        $("#button").click(
            changeColor
        )

        $("#move").click(
            moveSquare
        )
    }
);