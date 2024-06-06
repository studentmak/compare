<template>
    <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Мой первый сайт на html</title>
</head>
<body>
    <!-- Основной блок сайта -->
    <div id="basic">
     
        <!-- Шапка сайта -->
        <div id="head-site">
            
            
        </div>
         
        <!-- Верхнее меню сайта -->
        <div id="menu-top">
        <div class="bg-1">
            <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Ассортимент</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Забронировать столик</a></li>
            <li><a href="#">Наши клиенты</a></li>
            <li class="none-bg"><a href="#">Контакты</a></li>
            </ul>
        </div>
        <div class="bg-2"></div>
        </div>
         
        <!-- Левое меню и Контент -->
        <div id="content">
         
            <!-- Контент - правый блок -->
            <div class="right">
                <h1>Кофе Американо</h1>
                <p>Драматизм, в первом приближении, начинает определенный синтез искусств. Целостность, на первый взгляд, изящно иллюстрирует феномер "психической мутации". Герменевтика, как бы это ни казалось парадоксальным, изящно продолжает онтогенез, таким образом, сходные законы контрастирующего развития характерны и для процессов в психике. </p>
 
                <p>Согласно теории "вчувствования", разработанной Теодором Липпсом, флегматик дает эйдос. Художественное восприятие образует социально-психологический фактор, таким образом, все перечисленные признаки архетипа и мифа подтверждают, что действие механизмов мифотворчества сродни механизмам художественно-продуктивного мышления. Пародия, согласно традиционным представлениям, изящно имитирует деструктивный горизонт ожидания.</p>
                 
                
 
                <p>Художественный ритуал, по определению, иллюстрирует метод кластерного анализа. Сангвиник, так или иначе, изменяем. Весьма существенно следующее: анимус представляет собой маньеризм, именно об этом комплексе движущих сил писал З.Фрейд в теории сублимации.</p>
 
                <p>Диалогичность готично образует художественный ритуал. Восприятие сотворчества, в том числе, использует неизменный холерик, так Г.Корф формулирует собственную антитезу. Беллетристика иллюстрирует принцип артистизма. </p>
 
                <p>Горизонт ожидания аккумулирует фактографический эдипов комплекс, таким образом, сходные законы контрастирующего развития характерны и для процессов в психике. Игровое начало, так или иначе, выстраивает конструктивный этикет, так Г.Корф формулирует собственную антитезу.</p>
 
                <p>Художественный ритуал, по определению, иллюстрирует метод кластерного анализа. Сангвиник, так или иначе, изменяем. Весьма существенно следующее: анимус представляет собой маньеризм, именно об этом комплексе движущих сил писал З.Фрейд в теории сублимации.</p>
             
            </div>
             
            <!-- Левое меню - левый блок блок -->
            <div class="left">
                <div id="left-menu">
                    <div class="block-nad-menu"></div>
                    <div class="block-menu">
                    <ul>
                    <li><a href="#">Кофе Айриш</a></li>
                    <li><a href="#">Кофе Американо</a></li>
                    <li><a href="#">Кофе Глясе</a></li>
                    <li><a href="#">Кофе Диппио</a></li>
                    <li><a href="#">Кофе Капучино</a></li>
                    <li><a href="#">Кофе Кон Панна</a></li>
                    <li><a href="#">Кофе Коретто</a></li>
                    <li><a href="#">Кофе Латте</a></li>
                    <li class="none-bg"><a href="#">Кофе Лунго</a></li>
                    </ul>
                    </div>
                    <div class="block-pod-menu"></div>
                </div>
             
            </div>
         
        </div>
         
        <div class="myclr"></div>
         
        <!-- Подвал -->
        <div id="podval">
            <div class="yellow"></div>
            <div class="p1">ООО “Кофейня” 2015г.<br/>
            г. Москва, ул Революционная 1а</div>
            
            <div class="p2">Создание сайтов веб-студия <a href="#">«Парампампам»</a></div>
        </div>
        <div class="myclr"></div>
         
    </div>
</body>
</template>

<script>
// import { request } from "../api.js";

   export default {
        name: 'Test',
        data(){
            return{
                
            }
        }
    }
        
</script>

<style>
/*Каркас сайта*/
body {padding:0px; margin:0; background:#c94b28; font-size:14px; font-family:Arial, Sans-serif;}
#basic {width:960px; min-height:650px; margin:0 auto; padding:20px 20px 20px 20px; background:#fff;}
img {border:0;}
a {color:#ff9c00;}
a:hover {text-decoration:none;}
 
/*Шапка сайта*/
#head-site {height:120px;}
li.none-bg {background:none!important;}
.telefon {float:right;}
 
/*Верхнее меню сайта*/
#top-menu {width:960px; height:74px; }

.bg-2 {width:940px; height:8px; background:#df7904; margin:0 auto;}
.bg-1 ul {margin:0; padding:0; list-style:none;}
.bg-1 ul li a {display:block; height:16px; padding:24px 27px 24px 27px; color:#ff9c00; text-decoration:none; text-transform:uppercase;}
.bg-1 ul li a:hover {color:#fff; background:#ff9c00;}
 
/*Левое меню и Контент*/
#content {width:960px; padding:20px 0 0 0; }
 
/*Контент - правый блок*/
.right { float:right; width:690px; padding:0 0 0 20px; text-align:justify;}
.right h1 {text-transform:uppercase; color:#4c281e; font-weight:normal; margin-top:0;}
 
/*Левое меню - левый блок*/
.left {width:250px; float:left;}
.block-nad-menu {width:240px; height:10px; background:#ff9c00;}
.block-pod-menu {width:240px; margin:0 0 0 10px; height:10px; background:#4c281e;}
.block-menu {width:240px; border-left:10px solid #ff9c00; background:#4c281e;}
.left ul {margin:0; padding:10px 0 0 0; list-style:none;}

 
 
/*Подвал*/
.myclr {clear:both; float:none; width:100%; height:1px;}
#podval {border-top:10px solid #4c281e; margin-top:20px;}
.yellow {width:940px; height:5px; margin:0 auto; background:#ff9c00;}
.p1 {float:left; width:300px; padding:15px 0 0 0;}
.p2 {float:right; width:200px; text-align:right; padding:15px 20px 0 0;}
.p3 {float:right; width:30px; padding:15px 0 0 0;}
</style>

