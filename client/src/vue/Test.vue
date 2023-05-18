<template>
    <div class="container">
        <header>
            <select v-model="activeMode" v-on:change="modeTables()">
                <option disabled value="" >Выберите режим</option>
                <option>initial</option>
                <option>Duplicates by id</option>
                <option>Duplicates by title</option>
            </select>
        </header>

        <table>
            <thead>
                <tr>
                    <th v-for="column in gridColumns" v-bind:key="column">{{ column }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in dataMode.dataDooglys" v-bind:key="item">
                    <td>{{ +dataMode.dataDooglys.indexOf(item) + 1}}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.price }}</td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <tr>
                    <th v-for="column in gridColumns" v-bind:key="column">{{ column }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in dataMode.dataTilda" v-bind:key="item">
                    <td>{{ +dataMode.dataTilda.indexOf(item) + 1 }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import colors  from "colors";
import { request } from "../api.js";

   export default {
        name: 'Test',
        data(){
            return{
                items:[],
                gridColumns: ['№', 'id', 'title', 'price'],
                activeMode: '',

                dataMode:{
                dataDooglys: '',
                dataTilda: '',
                },

                gridDataDooglys:{
                    initialData: [],
                    duplicatesId: [],
                    duplicatesTitle:[],
                },
                gridDataTilda:{
                    initialData: [],
                    duplicatesId: [],
                    duplicatesTitle:[],
                },
                
            }
        },
        methods: {
            async getData(){
                try{
                    let result = await request('converter', { methods: 'GET' })
                    let result_json = await result.json()
                    this.gridDataDooglys.initialData = result_json.resultDooglys.sort(this.SortArray)
                    this.gridDataTilda.initialData = result_json.resultTilda.sort(this.SortArray)
                    console.log(Array.isArray(this.gridDataTilda))
                } catch{
                    console.log(error)
                }   
            },

            Duplicates(arr, prop) {
                let duplicates = []
                const tempArray = [...arr].sort().map(obj => obj[prop])

                for (let i = 0; i < tempArray.length; i++) {
                    if (tempArray[ i + 1 ] === tempArray[i]) {
                        duplicates.push(tempArray[i])
                    }
                }
                duplicates = [...new Set(duplicates)]

                let findDuplicates = arr.filter(i => duplicates.includes(i[prop]))

                return findDuplicates
            },

            SortArray(x, y){
                if (x.title < y.title) {return -1;}
                if (x.title > y.title) {return 1;}
                return 0;
                },

            true_or_false(el){
                if(el === true){
                    return false
                } else {
                    return true
                }
            },

            modeTables(){
                console.log('it is work')
                if (this.activeMode === 'Duplicates by id'){
                    this.dataMode.dataDooglys = this.gridDataDooglys.duplicatesId
                    this.dataMode.dataTilda = this.gridDataTilda.duplicatesId
                    console.log(this.dataMode.dataTilda)
                } else if (this.activeMode === 'initial'){
                    this.dataMode.dataDooglys = this.gridDataDooglys.initialData
                    this.dataMode.dataTilda = this.gridDataTilda.initialData
                } else if (this.activeMode === 'Duplicates by title'){
                    this.dataMode.dataDooglys = this.gridDataDooglys.duplicatesTitle
                    this.dataMode.dataTilda = this.gridDataTilda.duplicatesTitle
                }
                else {
                    this.dataMode.dataDooglys = this.gridDataDooglys.initialData
                    this.dataMode.dataTilda = this.gridDataTilda.initialData
                }
            }
        },

        computed: {
        },

        async mounted(){
            await this.getData()
            this.gridDataDooglys.duplicatesId = this.Duplicates(this.gridDataDooglys.initialData, 'id')
            this.gridDataTilda.duplicatesId = this.Duplicates(this.gridDataTilda.initialData, 'id')
            this.gridDataDooglys.duplicatesTitle = this.Duplicates(this.gridDataDooglys.initialData, 'title')
            this.gridDataTilda.duplicatesTitle = this.Duplicates(this.gridDataTilda.initialData, 'title')
            this.modeTables()
            console.log(this.gridDataDooglys.duplicatesId, this.gridDataTilda.duplicatesId)
        },

     }
    






</script>

<style>

	.container{
        display: flex;
    }

    table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
}

th,
td {
  min-width: max-content;
  padding: 10px 20px;
  border: 1px solid;
  border-color: green
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

.Duplicated {
 background-color: rgba(255, 166, 0, 0.9);
}
</style>

