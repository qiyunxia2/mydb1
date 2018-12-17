<?php
header("Content-type:text/html;charset=utf-8");
$userphone = $_GET['userphone'];
$userpass=$_GET['userpass'];
//二、处理
	//1、连接数据库服务器
$conn=mysql_connect("localhost","root","root");
	if(!$conn){
		die("连接失败");
	}else{
		//2、选择数据库
		mysql_select_db("mydb1",$conn);
		//3、执行SQL语句
		$str="select * from user where userphone='$userphone'";
		$result=mysql_query($str,$conn);
		if(mysql_num_rows($result)==0){
			$sql="insert into user(userphone,userpass)
			values('$userphone','$userpass')";
			$result=mysql_query($sql,$conn);
			//4、关闭数据库
			mysql_close($conn);
			if($result==1){
				echo"1";
			}else{
				echo"0";
			}	
		}else{
			echo"2";
		}
	
	}
?>