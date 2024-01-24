<!DOCTYPE html>
<html lang="UTF-8">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados</title>
</head>
<body>

<?php 

$conexao = mysqli_connect("mysql_ironbeard", "root", "qaZwsx45-xsWzaq76", "ironbeard_contato");

// CHECAR CONEXÃO
if (!$conexao) {
    echo "Não conectado";
} else {
    echo "Conectado ao banco>>>>>>>>>";
}

// RECUPERAR EMAIL
$email = $_POST["email"];

$sql = "SELECT email FROM ironbeard_contato.dados WHERE email='$email'";
$retorno = mysqli_query($conexao, $sql);

if (mysqli_num_rows($retorno) > 0){
    echo "E-mail já cadastrado.<br>";
} else {
    $email = $_POST["email"];
    $nome = $_POST["nome"];
    $celular = $_POST["celular"];

    $sql = "INSERT INTO ironbeard_contato.dados(email, nome, celular) VALUES ('$email', '$nome', '$celular')";
    $resultado = mysqli_query($conexao, $sql);

    if ($resultado) {
        echo "Usuário Cadastrado.<br>";
    } else {
        echo "Erro ao cadastrar usuário: " . mysqli_error($conexao) . "<br>";
    }
}

?>

</body>
</html>
