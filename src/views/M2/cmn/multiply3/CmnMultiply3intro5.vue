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
<h1>阶段五：倍增当地领袖</h1>
<div id="showVideoOptions"></div>
  <h2><span lang="ZH-CN"><span><span style="color:black">保罗第三次宣教之旅，</span></span></span>公元52-57 年</h2>

<p class="forward">此时期涵盖了约五年的时间。在过去的六年多里，数个宣教据点已倍增了许多门徒和教会。而最大的宣教据点是在此时期开始的。当以弗所的宣教据点成立时，有一些领袖被差派出去，现有的教会也接受训练。此阶段重要的事迹有：宣教活动增加以及天国持续扩张，整个罗马帝国的东部都能听到福音。</p>

<p class="forward">37.&nbsp;&nbsp; &nbsp;归正福音&mdash;&mdash;福音传讲有力（以弗所）（徒18:23-28）<br />
38.&nbsp;&nbsp; &nbsp;辨明福音&mdash;&mdash;福音传遍全省（以弗所）（徒19:1-10）<br />
39.&nbsp;&nbsp; &nbsp;见证福音&mdash;&mdash;福音改变文化（以弗所）（徒19:11-22）<br />
40.&nbsp;&nbsp; &nbsp;持守福音&mdash;&mdash;福音震撼城市（以弗所）（徒19:23-41）<br />
41.&nbsp;&nbsp; &nbsp;回程坚固教会&mdash;&mdash;马其顿、亚该亚（徒20:1-12）<br />
42.&nbsp;&nbsp; &nbsp;招聚坚固领袖&mdash;&mdash;以弗所教会领袖（徒20:13-38）</p>

<p class="forward">
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image5.png"
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image5.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image5.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p class="forward">&nbsp;</p>

<p class="forward">
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image6.png"
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image6.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image6.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗第三次宣教旅程，在以弗所写了哥林多前书，在马其顿写了哥林多后书，在哥林多写了罗马书：</span></span></span></span></span></span></span></span></p>

<ol>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗从耶路撒冷到安提阿，住了些日子，又经加拉太和弗吕家去坚固众门徒（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">18:23</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗到以弗所传道两年多（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">19:1-40</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗去马其顿（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">20:1</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗走遍马其顿，后到希腊住了三个月（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">20:2</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗从腓立比到特罗亚（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">20:6-12</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗步行到亚朔，再乘船到米推利尼、撒摩、米利都、哥士、罗底、帕大喇、推罗、多利买、凯撒利亚回到耶路撒冷（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">20:13-21:15</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
</ol>

<p><span lang="ZH-CN"><span><span style="color:black">图片与以下内容取自：</span></span></span><span lang="EN-US"><span>https://cmcbiblereading.com/wp-content/uploads/2016/10/118.gif</span></span></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->