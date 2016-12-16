<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
<?php
$myfile = fopen("str.txt", "r") or die("Unable to open file!");
$str = fread($myfile,filesize("str.txt"));
fclose($myfile);





$arr=explode(',',$str);
for ($x=0; $x<count($arr); $x++) {
  echo "数字是：$arr[$x] <br>";
}
?>
<input type="hidden" id="arr" value="<?php echo $str?>" />
<script type="text/javascript">
var input = document.getElementById('arr');
	console.log(input.value);
</script>
</body>
</html>
