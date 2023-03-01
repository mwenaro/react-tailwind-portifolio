<?php
$path = './new-file'+time()+''.json';
// JSON data afile_put_contents('php://memory', 'PHP')s an array
$jsonData = json_decode(file_put_contents('php://memory'),true);
// Convert JSON data from an array to a string
if($jsonData){
$jsonString = json_encode($jsonData, JSON_PRETTY_PRINT);
// Write in the file
$fp = fopen($path, 'w');
fwrite($fp, $jsonString);
fclose($fp);
echo json_encode(['msg'=>'OK!']);
}else{
    echo json_encode(['msg'=>'Failed!']);
}