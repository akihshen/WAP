<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Calculator</title>
        <style>
            div{
                padding: 5px 0px
            }
        </style>
    </head>

    <body>
        <!-- <h1>Simple Calculator</h1> -->

        <fieldset>
            <legend>Simple Calculator</legend>
            <form action="calculate" method="POST">
                <div>
                    <div>
                        <input type="text" name="addend1" pattern="[0-9]+\.?[0-9]*" title="Enters numbers only"> 
                        + <input type="text" name="addend2" pattern="[0-9]+\.?[0-9]*" title="Enters numbers only">
                    </div>
                    <div>
                        <input type="text" name="multiplicand1" pattern="[0-9]+\.?[0-9]*" title="Enters numbers only"> 
                        * <input type="text" name="multiplicand2" pattern="[0-9]+\.?[0-9]*" title="Enters numbers only">
                    </div>
                    <div><input type="submit" value="submit"></div>
                </div>                
            </form>
        </fieldset>
    </body>
</html>