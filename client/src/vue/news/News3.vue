<template>
    <div>
        <div id="where_me_block">
            <router-link class="where_me" to="/">Главная</router-link>
            <router-link class="where_me" to="/news">/Новости</router-link>
        </div>
        <div id="where_me1">Детский отчетный концерт вокального объединения "Радуга" и хореографического коллектива "Стрекоза" 26.05.2024</div>

        <div class="carousel__container">
            <div class="carousel__item">
                <img src="../../photo/glavnoe_foto.png" class="carousel__image">
            </div>
            <div class="carousel__item">
                <img src="../../photo/glavnoe_foto.png" class="carousel__image">
            </div>
            <div class="carousel__item">
                <img src="../../photo/glavnoe_foto.png" class="carousel__image">
            </div>
        </div>

        <div class="text-content">
            <text>Детский отчетный концерт вокального объединения "Радуга" и хореографического коллектива "Стрекоза"26 мая в ЦДК состоялся детский отчетный концерт, в котором приняли участие два творческих коллектива: хореографический "Стрекоза" и вокальный "Радуга". Это событие стало настоящим праздником для юных талантов, их родителей, близких и всех ценителей прекрасного.
            </text>
        </div>
    </div>
</template>

<script>
// import { request } from "../api.js";

   export default {
        name: 'News3',
        data(){
            return{
                
            }
        }
    }
        
</script>

<style>
    @keyframes carouselAnim{
        0%{
            transform: translateX(100%) rotatey(0) scale(1.2, 1.2);
            transform-origin: center center;
            z-index: 10;
        }
        27%{
            transform: translateX(100%) rotatey(0) scale(1.2, 1.2);
            transform-origin: center center;
            z-index: 10;
        }
        33.33333%{
            transform: translateX(0) translateY(0) rotatey(10deg) scale(0.8,1);
            transform-origin: left center;
            z-index: 5;
        }
        60%{
            transform: translateX(0) translateY(0) rotatey(10deg) scale(0.8,1);
            transform-origin: left center;
            z-index: 5;
        }
        66.666666%{
            transform: translateX(200%) translateY(0) rotatey(-10deg) scale(0.8,1);
            transform-origin: right center;
            z-index: 5;
        }
        93%{
            transform: translateX(200%) translateY(0) rotatey(-10deg) scale(0.8,1);
            transform-origin: right center;
            z-index: 5;
        }
        100%{
            transform: translateX(100%) rotatey(0) scale(1.2, 1.2);
            transform-origin: center center;
            z-index: 10;
        }
    }

    .carousel__container{
        width: 100%;
        max-width: 960px;
        perspective: 300px;
        perspective-origin: 50% 60%;
        min-height: 14em;
        margin: 3em auto;
    }

    .carousel__item{
        position: absolute;
        width: 33%; 
        padding-bottom: 19%;
        animation-name: carouselAnim;
        /* transform: translateX(0) rotatey(50deg); */
        transform-origin: left center;
        animation-duration: 12s;
        animation-iteration-count: infinite;
    }

    .carousel__item:first-child{
        animation-delay: -4s;
    }
    .carousel__item:last-child{
        animation-delay: -8s;
    }

    .carousel__image{
        position: absolute;
        width: 100%;
        border-radius: 2px;
    }

    .text-content {
        margin-left: 150px;
        margin-right: 150px;
        font-size: larger;
    }
</style>

