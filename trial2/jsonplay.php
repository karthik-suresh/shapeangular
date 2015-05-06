<?
/*$post_data = file_get_contents("php://input");
echo json_decode($post_data);
$tennisArray = array('Djokovic' => 1, 'Federer' => 2, 
'Nadal' => 3, 'Murray' => 4);

echo json_encode($tennisArray);*/
$post_data = file_get_contents("php://input");
$data = json_decode($post_data);
echo json_encode($data);
?>