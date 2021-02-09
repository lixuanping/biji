<template>
 <div>
   {{foo}}
 </div>
</template>

<script lang='ts'>
import {Vue, Component} from 'vue-property-decorator';

// function Component(options: any) {
//     return function (target: any) {
//         return Vue.extend(options);
//     }
// }


@Component({
    
})
export default class Decor extends Vue {
    data(){
        return {foo:'foo'}
    }
}
</script>

<style scoped>
</style>