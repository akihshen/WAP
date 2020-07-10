<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Improved Calculator</title>
        <style>
            div{
                padding: 5px 0px
            }

            legend{
                font-weight: bolder
            }
        </style>
    </head>

    <body>
        <fieldset>
            <legend>Improved Calculator</legend>
            <form action="calculate" method="POST">
                <div>
                    <div>
                        <input type="text" name="addend1" pattern="[0-9]+\.?[0-9]*" title="Enters numbers only"> 
                        + <input type="text" name="addend2" pattern="[0-9]+\.?[0-9]*" title="Enters numbers only">
                        = <input type="text" name="sum" disabled>
                    </div>
                    <div>
                        <input type="text" name="multiplicand1" pattern="[0-9]+\.?[0-9]*" title="Enters numbers only"> 
                        * <input type="text" name="multiplicand2" pattern="[0-9]+\.?[0-9]*" title="Enters numbers only">
                        = <input type="text" name="product" disabled>
                    </div>
                    <div><input type="submit" value="submit"></div>
                </div>                
            </form>
        </fieldset>
    </body>
</html>