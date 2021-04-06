

<html>
    <script>
        console.log(window.foo)
        ( window.foo || ( window.foo = "JSJS" ) );
        console.log(window.foo)
    </script>

</html>