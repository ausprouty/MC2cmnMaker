<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';


export default {
  components: {
    VueImageZoomer
  },
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<h1>阶段六：辩解外邦宣教</h1>
<div id="showVideoOptions"></div>
  <h2>（保罗被捕受审）〔公元 57-62 年〕</h2>

<p>为六、七个宣教据点立下根基后，保罗接下来的角色转成为自己的工作和信仰辩护。此阶段发生的重要事迹有：长途旅程、危险的处境、在地方政府的高官面前发言。</p>

<div class="lesson-icon">43.预言会被抓&mdash;&mdash;去耶城路上（徒21:1-26）</div>

<div class="lesson-icon">44.圣殿中被抓&mdash;&mdash;耶路撒冷（徒21:27-36）</div>

<div class="lesson-icon">45.圣殿中辩解&mdash;&mdash;耶路撒冷（徒21:37-22:21）</div>

<ul>
	<li>
	<div class="lesson-icon">附录45.1：《宣教士：杨格非》&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</div>
	</li>
</ul>

<div class="lesson-icon" style="text-align:left">46.公会中辩解&mdash;&mdash;耶路撒冷（徒22:22-23:11）</div>

<div class="lesson-icon" style="text-align:left">47.谋杀得保护&mdash;&mdash;耶路撒冷（徒23:12-35）<u>&nbsp;</u></div>

<div class="lesson-icon" style="text-align:left">48.巡抚前辩解&mdash;&mdash;凯撒利亚，两年（徒24:1-27）</div>

<div class="lesson-icon" style="text-align:left">49.新官前辩解&mdash;&mdash;凯撒利亚（徒25:1-22）</div>

<ul>
	<li style="text-align:left">
	<div class="lesson-icon">附录49.1《主仆：宋尚节》</div>
	</li>
</ul>

<div class="lesson-icon" style="text-align:left">50.王上前辩解&mdash;&mdash;凯撒利亚（徒25:23-26:32）</div>

<div class="lesson-icon" style="text-align:left">51.海难中应许&mdash;&mdash;去罗马船上（徒27:1-26）</div>

<div class="lesson-icon" style="text-align:left">52.海难中得救&mdash;&mdash;船登岛岸（徒27:27-44）</div>

<div class="lesson-icon" style="text-align:left">53.岛上蒙保守&mdash;&mdash;马耳他岛（徒28:1-11）</div>

<ul>
	<li style="text-align:left">
	<div class="lesson-icon">附录53.1《主仆：史祈生》</div>
	</li>
</ul>

<div class="lesson-icon" style="text-align:left">54.软禁中辩解&mdash;&mdash;罗马（徒28:12-31）</div>

<p style="text-align:left">行动计划表</p>

<p style="text-align:left">
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image10.png"
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image10.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image10.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p style="text-align:justify">上图：保罗被押往罗马受审旅程：</p>

<ol>
	<li style="text-align:justify">保罗在耶路撒冷被捉，送到凯撒利亚（徒21:27-23:30）</li>
	<li style="text-align:justify">在凯撒利亚被囚两年，受审后送往罗马（徒23:31-26:32）</li>
	<li style="text-align:justify">保罗被押乘船经西顿、每拉到了佳澳（徒27:1-8）</li>
	<li style="text-align:justify">保罗等在海上历经风浪的危险到了米利大（徒27:9-44）</li>
	<li style="text-align:justify">从米利大经叙拉古、利基翁、部丢利，到了罗马，在罗马等待受审两年期间继续传道（徒28:1-17）</li>
</ol>

<p>&nbsp;（图片与以下内容取自：https://cmcbiblereading.com/wp-content/uploads/2016/10/118.gif）</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->