<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cajero Automático</title>
    <script>
        let cuentas = [
            {nombre: "Cuenta 1", saldo: 100000, contraseña: "cuenta1"},
            {nombre: "Cuenta 2", saldo: 50000, contraseña: "cuenta2"},
            {nombre: "Cuenta 3", saldo: 200000, contraseña: "cuenta3"}
        ];

        let cuentaActual = null;

        function ingresarNombre() {
            let nombre = prompt("Por favor, introduce tu nombre:");
            cuentaActual = cuentas.find(cuenta => cuenta.nombre === nombre);

            if (cuentaActual) {
                validarContraseña();
            } else {
                alert("Nombre no válido. Por favor, intenta de nuevo.");
                ingresarNombre();
            }
        }

        function validarContraseña() {
            let contraseña = prompt("Por favor, introduce tu contraseña:");

            if (cuentaActual.contraseña === contraseña) {
                mostrarEstadoCuenta();
            } else {
                alert("Contraseña incorrecta. Por favor, intenta de nuevo.");
                validarContraseña();
            }
        }

        function mostrarEstadoCuenta() {
            document.getElementById("saldo").innerText = cuentaActual.saldo;
            document.getElementById("opciones").style.display = "block";
        }

        function ingresarDinero() {
            let cantidad = parseFloat(prompt("Introduce la cantidad a ingresar:"));

            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Cantidad no válida. Por favor, intenta de nuevo.");
                return;
            }

            cuentaActual.saldo += cantidad;
            if (!ajustarSaldo()) {
                mostrarEstadoCuenta();
            }
        }

        function retirarDinero() {
            let cantidad = parseFloat(prompt("Introduce la cantidad a retirar:"));

            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Cantidad no válida. Por favor, intenta de nuevo.");
                return;
            }

            if (cuentaActual.saldo < cantidad) {
                alert("Saldo insuficiente.");
                return;
            }

            cuentaActual.saldo -= cantidad;
            if (!ajustarSaldo()) {
                mostrarEstadoCuenta();
            }
        }

        function ajustarSaldo() {
            if (cuentaActual.saldo < 10 || cuentaActual.saldo > 999999) {
                alert("Error: El saldo excede los límites permitidos.");
                return true;
            }
            return false;
        }

        window.onload = ingresarNombre;
    </script>
    <style>
        #opciones {
            display: none;
        }
    </style>
</head>
<body>
    <h1>Cajero Automático</h1>
    <p>Saldo disponible: $<span id="saldo"></span></p>
    <div id="opciones">
        <button onclick="ingresarDinero()">Ingresar dinero</button>
        <button onclick="retirarDinero()">Retirar dinero</button>
    </div>
</body>
</html>
