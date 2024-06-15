<template>
    <div>
        <div id="where_me_block">
            <router-link class="where_me" to="/">Главная</router-link>
            <router-link class="where_me" to="/news">/Новости</router-link>
        </div>
        <div id="where_me1">Новости</div>
    </div>
    <div id="news_block">
        <router-link to="/news1">
            <div class="news">
                <img class="banner_photo" src="../photo/glavnoe.png">
                <div class="text_content"><text>День славянской письменности и культуры.</text></div>
                <div class="data_news">24.05.2024</div>
            </div>
        </router-link>
        <router-link to="/news2">
        <div class="news">
            <img class="banner_photo" src="../photo/glav.png">
            <div class="text_content"><text>Творческий вечер вокально-инструментального коллектива "Родня"</text>.</div>
            <div class="data_news">24.05.2024</div>
        </div>
        </router-link>
        <router-link to="/news3">
        <div class="news">
            <img class="banner_photo" src="../photo/glavnoe_foto.png">
            <div class="text_content"><text>Детский отчетный концерт вокального объединения "Радуга" и хореографического коллектива "Стрекоза"</text></div>
            <div class="data_news">26.05.2024</div>
        </div>
        </router-link>
        <router-link to="/news4">
        <div class="news">
            <img class="banner_photo" src="../photo/dYDFT5tPmIM.png">
            <div class="text_content"><text>III межокружной фестиваль народного творчества «Сергачские узоры».</text></div>
            <div class="data_news">02.06.2024</div>
        </div>
        </router-link>
        <router-link to="/news5">
        <div class="news">
            <img class="banner_photo" src="../photo/b3WkXi-Mz28.png">
            <div class="text_content"><text>День социального работника.</text></div>
            <div class="data_news">07.06.2024</div>
        </div>
        </router-link>
        <router-link to="/news6">
        <div class="news">
            <img class="banner_photo" src="../photo/foto3.png">
            <div class="text_content"><text>Праздничная программа "Возрождайся, Россия!", посвященная Дню независимости России</text></div>
            <div class="data_news">12.06.2024</div>
        </div>
        </router-link>
    </div>
</template>

<script>
// import { request } from "../api.js";

   export default {
        name: 'News',
        data(){
            return{
                items: [
                    {photo: '../photo/foto3.png', text_poster: 'cucumber', data_news: `${new Date().toLocaleDateString()}`},
                    {photo: '', text_poster: 'cucumber', data_news: `${new Date().toLocaleDateString()}`},
                    {photo: '', text_poster: 'cucumber', data_news: `${new Date().toLocaleDateString()}`},
                    {photo: '', text_poster: 'cucumber', data_news: `${new Date().toLocaleDateString()}`},
                    {photo: '', text_poster: 'cucumber', data_news: `${new Date().toLocaleDateString()}`},
                    {photo: '', text_poster: 'cucumber', data_news: `${new Date().toLocaleDateString()}`},
                ]
            }
        }
    }
        
</script>

<style>
    #news_block {    
        display: flex;
        margin-top: 25px;
        margin-left: 130px;
        margin-right: 130px;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .news {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        height: 325px;
        border-radius: 7px;
        border: 2px;
        border-color: #505050b0;
        border-style: solid;
        margin-right: 20px;
        margin-bottom: 70px;
        text-decoration: none;
    }

    .banner_photo {
        width: 250px;
        height: 140.625px;
        border-radius: 7px;
        margin-top: 20px;
    }

    .text_content {
        display: flex;
        width: 265px;
        height: 125px;
        margin-top: 12px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .data_news {
        margin-right: 230px;
        margin-top: 5px;
        font-size: small;
        color: rgba(73, 73, 73, 1);
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>

