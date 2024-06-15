<template>
    <div>
        <div id="where_me_block">
            <router-link class="where_me" to="/">Главная</router-link>
            <router-link class="where_me" to="/tickets">/Билеты</router-link>
        </div>
        <div id="where_me1">Билеты</div>

        <div id="tickets">
            <div class="ticket">
                <div class="date_tickets"></div>
                <div ></div>
            </div>
        </div>
    </div>
</template>

<script>
// import { request } from "../api.js";

   export default {
        name: 'Tickets',
        data(){
            return{
                
            }
        }
    }
        
</script>

<style>
    #tickets {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .ticket {
        width: 1200px;
        height: 280px;
        border-radius: 8px;
        border-style: solid; 
    }
</style>

