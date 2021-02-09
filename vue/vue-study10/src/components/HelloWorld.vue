<template>
  <div class="hello">
    <h1>{{ updateMsg }}</h1>
    <p>
      <input type="text" @keydown="addFeature" />
    </p>
    <div v-for="feature in features" :key="feature.id">{{ feature.name }}</div>
    <div>特性总数：{{count}}</div>
    {{qing}}
    {{aa}}
    {{lengths}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import axios from "axios";

// class Feature {
//   constructor(public id: number, public name: string) {}
// }

interface Feature {
  id: number;
  name: string;
}

// 使用泛型
interface Result<T> {
  ok: 0 | 1;
  data: T;
}

// 泛型方法
function getData<T>(): Promise<Result<T>> {
  const data: any = [
    { id: 1, name: "类型注解", version: "2.0" },
    { id: 2, name: "编译型语言", version: "1.0" }
  ];
  return Promise.resolve<Result<T>>({ ok: 1, data });
}

@Component({
  // 声明周期钩子
  async created() {
    // console.log("aaaa");
    // const result = await getData<Feature[]>();
    // this.features = result.data;
    axios.get<Feature[]>("/api/list").then((res) => {
      this.features = res.data;
    });
    this.updateMsg = this.msg;
    setTimeout(() => {
      this.updateMsg = 'aaaaa';
    }, 3000);
  }
})
export default class HelloWorld extends Vue {

  data() {
    return {
      aa: 'aaa',
      updateMsg: ''
    }
  }
  // 上面的配置时给vue的
  @Prop({type: String, default: ''})
  private qing!: string;

  @Prop({type: String, default: ''})
  private msg!: string; // 下面这些约束是给ts设置的

  // 属性相当于data
  private features: Feature[] = [];

  @Watch('updateMsg')
  onMsgChange(val:string, oldVal:string) {
    console.log('updateMsg变更');
  }

  // 方法直接作为回调函数
  @Emit('addFeature')
  private addFeature(event: KeyboardEvent): void {
    // 类型断言
    const input = event.target as HTMLInputElement;
    const feature = { id: this.features.length + 1, name: input.value };
    this.features.push(feature);
    input.value = "";
    return feature;
  }

  

  // 存取器可以用作计算属性
  get count() {
    return this.aa.length;
  }
  get lengths() {
    return this.aa.length;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
