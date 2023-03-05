<html>
<head>
	<title>Variáveis</title>
</head>
<style>
	body {
		font-size: 1.5em;
	}
	div {
		margin: 0 auto;
		max-width: 500px;
	}
	.exemplo1 {
		color: #333;
	}
</style>
<body>

	<?php 
		$tituloSite = 'Site Origamid';
		$listaProdutos = array('Produto 1', 'Produto 2')
	?>
	<div class="exemplo1">
		<h1><?php echo $tituloSite ?></h1>
		<p>Quer aprender Web Design então se cadastre no site da <?php echo $tituloSite ?></p>
		<ul>
			<li><?php echo $listaProdutos[0]; ?></li>
			<li><?php echo $listaProdutos[1]; ?></li>
		</ul>
	</div>

</body>
</html>